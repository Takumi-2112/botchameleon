# This file will hold the code that handles messaging the AI
import requests
import json
import os
import dotenv
# Load environment variables from .env file
dotenv.load_dotenv()


def ai_setup(message):
  response = requests.post(
    url="https://openrouter.ai/api/v1/chat/completions",
    headers={
      "Authorization": "Bearer " + os.getenv("API_KEY"),
      "Content-Type": "application/json",
    },
    data=json.dumps({
      "model": "mistralai/mistral-small-3.2-24b-instruct:free",
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": message
            },
          ]
        }
      ],
    })
  )
  return response.json()["choices"][0]["message"]["content"]

# print(ai_setup("Hello, how are you?"))  # Print only the AI's message content