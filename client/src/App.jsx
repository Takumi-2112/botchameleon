import { useState } from "react";
import "./styles/App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [character, setCharacter] = useState("default"); // Default character

  const characters = {
    default: "You are a helpful AI assistant.",
    bender: "You are Bender from Futurama. Be sarcastic and crude. Say 'Bite my shiny metal ass!' often.",
    pirate: "Arrr! Speak like a pirate, ye scurvy dog!",
    shakespeare: "Thou shalt speaketh in the manner of the Bard himself."
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("http://127.0.0.1:5000/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: input,
          character: character // Send selected character to backend
        }),
      });
      
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data?.data ?? "" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error: Could not reach server." },
      ]);
    }
  };

  return (
    <div className="app-master">
      <div className="chat-container">
        <h1>Chatbot</h1>
        <div className="character-selector">
          <label htmlFor="character">Personality: </label>
          <select 
            id="character"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
          >
            <option value="default">Default Assistant</option>
            <option value="bender">Bender</option>
            <option value="pirate">Pirate</option>
            <option value="shakespeare">Shakespeare</option>
          </select>
        </div>
        <div className="chat-window">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.sender === "user" ? "user" : "bot"}`}
            >
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;