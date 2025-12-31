import os
import requests
from pinecone import Pinecone, ServerlessSpec
from dotenv import load_dotenv
from separate_main import separate_lines
import os

# API Keys
load_dotenv()  
API_KEY = os.getenv("WEATHER_API_KEY")
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

# Database
script_dir = os.path.dirname(__file__)
path = os.path.join(script_dir, 'kis_data.txt')
records = separate_lines(path)
index_name = "kis-data"

# Track if database has been initialized
_db_initialized = False

def _initialize_database():
    """Initialize the database only once"""
    global _db_initialized
    
    if _db_initialized:
        return
    
    # Check if index exists, create if not
    if not pc.has_index(index_name):
        pc.create_index_for_model(
            name=index_name,
            cloud="aws",
            region="us-east-1",
            embed={
                "model": "llama-text-embed-v2",
                "field_map": {"text": "chunk_text"}
            }
        )
        
        # Only upsert records when creating a new index
        index = pc.Index(index_name)
        records = separate_lines(path)
        index.upsert_records("kis", records)
        print("Database created and records upserted.")
    else:
        print("Database already exists, skipping upsert.")
    
    _db_initialized = True


def upsert_new_data(new_file_path: str):
    """Call this function when you have new data to add"""
    _initialize_database()
    index = pc.Index(index_name)
    new_records = separate_lines(new_file_path)
    index.upsert_records("kis", new_records)
    print(f"Upserted {len(new_records)} new records.")


def search_kis_database(query: str) -> str:
    """Search the database - only retrieves, never upserts"""
    _initialize_database()
    
    index = pc.Index(index_name)

    results = index.search(
        namespace="kis",
        query={
            "top_k": 3,  # k-nearest neighbors
            "inputs": {
                'text': query
            }
        }
    )

    top3 = []
    for i in range(3):
        top = results["result"]["hits"][i]["fields"]["chunk_text"]
        top3.append(top)

    return top3

# Navigation
# LOCATION_MAP = {
#     "bus_stop": "node1",
#     "break_room": "node2",
#     "office": "node3",
# }

# Navigation with descriptions
LOCATION_MAP = {
    "bus_stop": {
        "node_id": "node11",
        "description": "The main bus stop where students are dropped off and picked up. It's located at the front entrance of the school campus."
    },
    "hs_lobby": {
        "node_id": "node130",
        "description": "The hs_lobby is a central entrance space in the high school area where students gather, wait, and transition between classrooms."
    },
    "design_suite": {
        "node_id": "node1",
        "description": "A collaborative workspace where students plan engineering projects and sketch early robot concepts. It’s often used for brainstorming, prototyping ideas, and working through design challenges."
    },
    "media_classroom": {
        "node_id": "node7",
        "description": "A production space used for PTV—Phoenix Television—where students film and edit the school’s weekly broadcast. It includes cameras, lighting, and editing stations for student media work."
    },
    "robotics_room": {
        "node_id": "node5",
        "description": "The main VEX Robotics workspace where teams build robots, test mechanisms, and program autonomous routines. It serves as the central hub for competitions, equipment storage, and drive practice."
    },
    "fabrication_room": {
        "node_id": "node6",
        "description": "The fabrication lab equipped with 3D printers, laser cutters, and tools for producing custom robot parts. Students come here to manufacture components and refine precise builds for robotics."
    },
    "green_house": {
        "node_id": "node8",
        "description": "A controlled indoor garden space used for biology and environmental science projects. Students grow plants, run sustainability experiments, and collect long-term data here."
    },
    "pac": {
        "node_id": "node24",
        "description": "The Performing Arts Center auditorium used for performances, ceremonies, and big presentations. It hosts concerts, plays, and community gatherings throughout the year."
    },
    "percussion_studio": {
        "node_id": "node32",
        "description": "A rehearsal space dedicated to percussion instruments and practice. It includes specialized equipment and sound-isolated areas for focused work."
    },
    "band_room": {
        "node_id": "node33",
        "description": "The main rehearsal room for band students, equipped with storage and practice spaces. It supports full ensemble rehearsals and sectional work."
    },
    "choir_room": {
        "node_id": "node34",
        "description": "The vocal rehearsal room used by choir classes and performance groups. Students practice warm-ups, harmonies, and concert pieces here."
    },
    "cafeteria": {
        "node_id": "node37",
        "description": "The school’s main dining hall where students gather for meals. It also serves as a social space during lunch and breaks."
    },
    "art_display": {
        "node_id": "node38",
        "description": "A hallway gallery that showcases student artwork, sculptures, and design projects. It highlights creative work from art and design classes."
    },
    "phoenix_store": {
        "node_id": "node39",
        "description": "The school store where students buy uniforms, merchandise, and spirit wear. It does not sell snacks—only official school items and essentials."
    },
    "field": {
        "node_id": "node43",
        "description": "The large outdoor athletic field used for sports practices and games. It’s also a central space for PE activities and school events."
    },
    "mpr": {
        "node_id": "node41",
        "description": "The Multi-Purpose Room used for clubs, meetings, testing, and flexible activities. It’s designed to support many different school functions."
    },
    "lower_gym": {
        "node_id": "node50",
        "description": "A gym space used for PE classes, indoor sports, and team practices. It’s located below the main gym and supports smaller athletic activities."
    },
    "fitness_center": {
        "node_id": "node57",
        "description": "The strength and conditioning room with weights, machines, and cardio equipment. Students train here for athletics and general fitness."
    },
    "upper_gym": {
        "node_id": "node67",
        "description": "The main full-size gym used for basketball games, assemblies, and large PE classes. It hosts school events, team practices, and competitions."
    },
    "conference_hall": {
        "node_id": "node72",
        "description": "A formal meeting and presentation space used for conferences, seminars, guest speakers, and school-wide discussions. It supports lectures, panels, and collaborative events."
    },
    "outdoor_classroom": {
        "node_id": "node74",
        "description": "An open-air learning space designed for classes, discussions, and hands-on activities conducted outside. It supports experiential learning and environmental studies."
    },
    "green_cage": {
        "node_id": "node77",
        "description": "An enclosed outdoor athletic training area used for batting practice, throwing drills, and conditioning. It allows focused practice in a controlled outdoor setting."
    },
    "es_playground": {
        "node_id": "node96",
        "description": "The elementary school playground equipped with play structures and open space for recess, physical activity, and social interaction among younger students."
    },
    "outdoor_rest_area": {
        "node_id": "node106",
        "description": "A quiet outdoor space with benches and shade where students can relax, talk, or take breaks between classes."
    },
    "math_classroom": {
        "node_id": "node112",
        "description": "A classroom dedicated to mathematics instruction, where students engage in problem-solving, lectures, group work, and analytical discussions."
    },
    "outdoor_seating": {
        "node_id": "node122",
        "description": "An outdoor seating area with tables or benches used for studying, eating, or informal gatherings during free periods."
    },
    "programming_classroom": {
        "node_id": "node126",
        "description": "A computer-equipped classroom where students learn programming, computational thinking, and software development through hands-on projects."
    },
    "chemistry_classroom": {
        "node_id": "node129",
        "description": "A science lab designed for chemistry instruction, equipped with lab benches, safety equipment, and materials for experiments and demonstrations."
    },
    "library": {
        "node_id": "node134",
        "description": "A quiet academic space with books, digital resources, and study areas where students research, read, collaborate, and work independently."
    }
}

def get_location_description(location: str) -> str:
    """Get the description for a location"""
    location_lower = location.lower()
    if location_lower in LOCATION_MAP:
        return LOCATION_MAP[location_lower]["description"]
    return "No description available for this location."


def navigate_to_location(location: str):
    """Returns the node ID for navigation"""
    location_lower = location.lower()
    if location_lower in LOCATION_MAP:
        return {
            "success": True,
            "node_id": LOCATION_MAP[location_lower]["node_id"],
            "location": location,
            # "description": LOCATION_MAP[location_lower]["description"]
        }
    else:
        return {
            "success": False,
            "error": f"Location '{location}' not found. Available locations: {', '.join(LOCATION_MAP.keys())}"
        }



# def get_weather(city: str) -> float:
#     endpoint = "https://api.openweathermap.org/data/2.5/weather"
#     params = {
#         "q": city,
#         "appid": API_KEY,
#         "units": "metric" # note this in LLM accordinly
#     }
#     resp = requests.get(endpoint, params=params)
#     resp.raise_for_status() # Raise an error for bad responses (4xx, 5xx)

#     data = resp.json()
#     # print(data)

#     weather = {
#         "temp_c": data["main"]["temp"],
#         "description": data["weather"][0]["description"],
#         "humidity_pct": data["main"]["humidity"],
#         "wind_kph": data["wind"]["speed"] * 3.6  # m/s → km/h
#     }
#     # temperature = weather["temp_c"]
#     return weather

# # print(get_weather("Seoul"))