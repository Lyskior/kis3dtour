import requests
from dotenv import load_dotenv
from openai import OpenAI
import os
import json
from tools import search_kis_database, LOCATION_MAP, navigate_to_location, get_location_description

# create LLM client
load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Define the tool for the LLM to call - tell AI abotut the function
functions = [
    {
        "type": "function",
        "name": "search_kis_database",
        "description": "Search up the top 3 most probable results from the Pinecone database about Korean International School (KIS) based on the query.",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "The search query"},
            },
            "required": ["query"],
        },
    },
    {
        "type": "function",
        "name": "navigate_to_location",
        "description": "Navigate the virtual tour to a specific location in KIS campus (e.g., library, classroom, cafeteria, gym, playground, entrance).",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The location to navigate to (e.g., 'library', 'classroom', 'cafeteria')",
                    "enum": list(LOCATION_MAP.keys())
                },
            },
            "required": ["location"],
        },
    }
]


def kis_chat(user_input: str, current_location: str = "unknown", current_node: str = ""):
    # Create location context message with description
    if current_location != "unknown" and current_location in LOCATION_MAP:
        location_desc = LOCATION_MAP[current_location]["description"]
        location_context = f"The user is currently viewing the '{current_location}' location in the virtual tour. Description: {location_desc}"
    else:
        location_context = "The user's current location in the virtual tour is unknown."
    
    # instructions tell the AI that it can call a function to get the weather
    input_messages = [
        {"role": "system", "content": f"""You are a friendly assistant of Korean International School (KIS) that helps users navigate the virtual tour and answers questions about the school. 

{location_context}

You have two tools available:
1. search_kis_database: Use this when users ask questions about general KIS information (history, programs, etc.) and to retrieve the information from the database. Format queries without including 'KIS' or 'Korean International School'.
2. navigate_to_location: Use this when users want to see or visit a specific location in the virtual tour (e.g., "show me the library", "take me to the cafeteria", "I want to see the gym").

When users ask about their current location, tell them they are at the {current_location.replace('_', ' ')} and provide concise description of that location.

Be helpful and concise in your responses."""},
        {"role": "user", "content": user_input},
    ]

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=input_messages,
        # give the AI access to the tool
        functions=functions,
        function_call="auto",
    )

    message = response.choices[0].message
    # print("First LLM response:", message)

    # If it decided to call get_weather:
    if message.function_call:
        function_name = message.function_call.name
        args = json.loads(message.function_call.arguments)

        if function_name == "search_kis_database":
            kis = search_kis_database(**args)
            response_data = {"Information about KIS": kis}
        elif function_name == "navigate_to_location":
            nav_result = navigate_to_location(**args)
            response_data = nav_result
        else:
            response_data = {"Error": "Function not recognized."}
        
        # print(response)
        # system message to tell the LLM that it can use the function call result to generate a followup response
        followup_messages = [
            {"role": "system", "content": f"""You are a friendly assistant of Korean International School (KIS) that answers users' questions about the school and helps navigate the virtual tour. 
            
{location_context}

Answer briefly and concisely."""},
            {"role": "user", "content": user_input},
            message,
            {
                "role": "function",
                "name": message.function_call.name,
                "content": json.dumps(response_data),
            }
        ]

        # send the function call result back to the LLM so it can generate a followup response
        followup = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=followup_messages,
        )

        result = {
            "message": followup.choices[0].message.content,
        }

        # Include navigation info if applicable
        if function_name == "navigate_to_location" and response_data.get("success"):
            result["navigate"] = response_data["node_id"]

        return result
    else:
        # otherwise it answered directly or didn't call a function
        # print("Bot:", message.content)
        return {"message": message.content}

# print(kis_chat("When did the school KIS start?"))