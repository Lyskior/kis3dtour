from flask import Flask, jsonify, render_template, request
from chat_agent import kis_chat

app = Flask(__name__)

# kis_chat.com/home
# Serve the HTML page
# static
@app.route("/")
@app.route("/home")
@app.route("/tour")
def home():
    return render_template("tour_with_chat.html")

@app.route("/chat")
def chat():
    return render_template("chat.html")

# dynamic
# API endpoint returns JSON
@app.route("/api/greet")
def greet():
    output = jsonify(message="Hello World from Flask!")
    # json is how internet deals with data
    # print("test", output.get_data(as_text=True))
    return output

# API endpoint to remove the text
@app.route("/api/remove_text")
def remove_text():
    return jsonify(message="")


# API endpoint to receive user input and return bot response
@app.route("/api/echo", methods=["POST"])
def echo():
    data = request.get_json() or {}
    user_message = data.get("message", "")
    current_location = data.get("current_location", "unknown")
    current_node = data.get("current_node", "")
    
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    
    # Get response from chatbot with location context
    response = kis_chat(user_message, current_location, current_node)
    
    # response can be either a string (old format) or dict (new format)
    if isinstance(response, str):
        return jsonify({"message": response})
    else:
        return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
