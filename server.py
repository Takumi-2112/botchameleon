from flask import Flask, request, jsonify
from flask_cors import CORS 
from ai import ai_setup

# This file will handle all the server code.
app = Flask(__name__)

CORS(app)

@app.route('/message', methods=['POST'])
def message():
  data = request.get_json()
  ai_response = ai_setup(data['message'])  # Call the AI setup function with the message from the request
  # You can process the message here
  response = {"reply": "Message received!", "data": ai_response}
  return jsonify(response)

if __name__ == '__main__':
  app.run(debug=True)