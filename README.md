# 🦎 BotChameleon

**Your AI Chat Companion That Transforms Into Anyone**

BotChameleon is an interactive AI chatbot application that allows users to switch between different character personalities while maintaining conversation context. Chat with Yoda, get roasted by Bender, receive wisdom from Shakespeare, or get help from any of the available characters - all while keeping the conversation flowing naturally!

## ✨ Features

- **Multiple AI Personalities**: Switch between 11+ unique characters including:
  - 🤖 **BotChameleon** - The helpful default assistant
  - 🛸 **Bender** - Sarcastic robot from Futurama
  - 🏴‍☠️ **Pirate** - Swashbuckling sea dog (Jack Sparrow style)
  - 📜 **Shakespeare** - The eloquent Bard himself
  - 🍄 **Mario** - Everyone's favorite plumber
  - 🎤 **Snoop Dogg** - Smooth-talking rap legend
  - 🇺🇸 **Donald Trump** - The tremendous former president
  - 🗡️ **Yoda** - Wise Jedi Master
  - 🔬 **Rick Sanchez** - Nihilistic scientist from Rick & Morty
  - 🎭 **Kanye West** - Controversial rap genius
  - 🇰🇿 **Borat** - Kazakh reporter
  - **More Characters To Come!**

- **Persistent Context**: Characters remember previous conversations even when you switch between them
- **Real-time Chat**: Instant responses with auto-scrolling chat interface
- **Session Management**: Unique session tracking for each conversation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Character Switching**: Seamlessly switch personalities mid-conversation

## 🚀 Live Demo

Visit the live application at: `https://botchameleon.netlify.app/`

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **CSS3** - Custom styling for responsive design
- **Vite** - Fast build tool and development server

### Backend
- **Python Flask** - Lightweight web framework
- **OpenRouter API** - AI model integration (Mistral AI)
- **Flask-CORS** - Cross-origin resource sharing
- **python-dotenv** - Environment variable management

### Deployment
- **Render** - Cloud application platform
- **Git** - Version control

## 📁 Project Structure

```
botchameleon/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── server.py
│   ├── ai.py
│   ├── requirements.txt
│   └── .env
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- OpenRouter API key

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd botchameleon/backend
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   API_KEY=your_openrouter_api_key_here
   ```

4. **Run the Flask server**
   ```bash
   python server.py
   ```
   Server will start at `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Frontend will start at `http://localhost:5173`

## 🔧 Configuration

### API Integration
The application uses OpenRouter API with Mistral AI model. You'll need to:
1. Sign up at [OpenRouter](https://openrouter.ai/)
2. Get your API key
3. Add it to your `.env` file

### Character Customization
Characters are defined in `ai.py`. To add or modify characters:
1. Add your character to the `CHARACTERS` dictionary
2. Update the frontend `characters` object in `App.jsx`
3. Add character selection option in the Navbar component

## 🌐 Deployment

The application is deployed on Render with automatic deployments from the main branch.

### Environment Variables (Production)
- `API_KEY`: Your OpenRouter API key

## 🎯 How It Works

1. **Session Management**: Each user gets a unique session ID for tracking conversations
2. **Context Preservation**: All messages are stored in context history that persists across character switches
3. **Character Switching**: When switching characters, the AI receives system instructions about the change while maintaining conversation memory
4. **Smart Context Limiting**: Conversations are limited to the last 30 exchanges to prevent token limit issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Reference

### POST `/message`
Send a message to the AI

**Request Body:**
```json
{
  "message": "Hello there!",
  "character": "yoda",
  "sessionId": "session_abc123_1234567890",
  "contextHistory": [
    {"role": "user", "content": "Previous message"},
    {"role": "assistant", "content": "Previous response"}
  ]
}
```

**Response:**
```json
{
  "reply": "Message received!",
  "data": "Hello there, young padawan! How help you, can I?",
  "sessionId": "session_abc123_1234567890"
}
```

## 🚨 Content Warning

This application contains character impersonations that may include:
- Strong language and adult humor
- Satirical content
- Controversial opinions (for entertainment purposes)

All content is generated by AI for entertainment purposes only and does not reflect the views of the developers.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenRouter for AI API services
- Mistral AI for the language model
- The React and Flask communities
- All the fictional characters that inspired our personalities

---

**Made with ❤️ by [Your Name]**

*Transform your conversations, one character at a time! 🦎✨*