from flask import Flask, request, jsonify
from flask_cors import CORS 
from ai import ai_setup  # Make sure this imports your character-aware AI function

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

@app.route('/message', methods=['POST'])
def message():
    data = request.get_json()

    user_message = data.get('message', '')
    character = data.get('character', 'botchameleon')  # Fallback to "botchameleon" if none provided

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    # Send message and character to AI setup function
    ai_response = ai_setup(user_message, character)

    response = {
        "reply": "Message received!",
        "data": ai_response
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run()
