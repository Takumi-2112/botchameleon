from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from ai import ai_setup  # Your AI function

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
  return "Botchameleon API is running"

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
    # app.run()
    app.run(debug=True, host='', port=5000)  # Run on all interfaces for local testing
