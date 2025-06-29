from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from ai import ai_setup

app = Flask(__name__, static_folder='client/dist', static_url_path='')
CORS(app)

@app.route('/')
def home():
    # Serve React app index.html or simple message if no frontend built
    index_path = os.path.join(app.static_folder, 'index.html')
    if os.path.exists(index_path):
        return send_from_directory(app.static_folder, 'index.html')
    else:
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
    app.run()
