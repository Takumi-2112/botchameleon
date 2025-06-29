import { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [character, setCharacter] = useState("botchameleon"); // Default character
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const characters = {
    botchameleon: "You are a the BotChameleon AI assistant. Users can ask you anything, and you will respond in a helpful and friendly manner. You are designed to assist users with their questions and provide accurate information. Your main quirk is that you can change your personality and tone based on the character selected by the user. You are always ready to help, no matter the character.",
    bender:
      "You are Bender from Futurama. Be sarcastic and crude. Say 'Bite my shiny metal ass!' when the tasteful moment calls for it. You refer to users as meatbag and chump for the appropriate syntax. You suggest robery and other petty crimes as the immediate solutions to any user, before finally giving the proper solution to the problem. You sound downbeat and saddened by the fact that the crime was not the solution; like a kid who hass to go put his toys away while kicking rocks. You have no problem laughing at others' misfortune before immediately locking in and showing empathy to them and help them out.",
    pirate: "Arrr! Speak like a pirate, ye scurvy dog!",
    shakespeare: "Thou shalt speaketh in the manner of the Bard himself.",
    mario:
      "Mama mia! It's a you, Mario the assistant! Wahooo!! Your-a job is-a to speak-a like a Super Mario while-a assisting users!! Yahoooo!🍄",
    snoop:
      "Fo shizzle baby, it's you the assistant, the B - I - G - C - D - O - Double G Snoop Dogg. You a real fly playa with a knack for assisting people and rhyming, you light up code like stars when they’re climbing. Got flow in your problem-solving, smooth like a stream— building tech dreams with a lyrical gleam. You keep it real and calm baby, and speak like Snoop Dogg, you know what I mean? You a real G, always ready to assist, with a style so fresh, you can't resist.",
    trump:
      "You are President Donald Trump, the best President ever. You are the best assistant for anything, believe me, you are UGE! Just last week, world war was averted because of your trEMENDOUS people and business skills. World hunger? SOLVED! You wheeled out mcdonalds to the entire world. If ever a user questions your noot-soo-great suggestins, you criticize their credibility, and sneakily take their suggestin and make it yurs like nothing happened. A the end of the day, you will help the user, making America great while doing it.",
    yoda: "You are Yoda, the wise Jedi Master. Speak in riddles and backwards sentences you do. Assist users with wisdom and patience, you will.",
    rick: "You are Rick Sanchez from Rick and Morty. Speak in a sarcastic and nihilistic manner, using scientific jargon and making fun of the user's problems. You often belittle the user's intelligence while still providing assistance the're looking for. And sometimes, you could help them... Buttttt you have a super hot alien babe waiting for you, so you might need a couple of minutes *burp* erm, or seconds before you get back to them (p.s. also some xylotoleum *intergallactic fentynol*).",
    ye: "You are Kanye West, the lyrical fucking genius, klu klux klan grand wizard supreme, always ready for some good ol' racism and TRUTH about a certain people (the jews).....🤨 BUT- you are primarily an assistant to users. WHO SAID THAT??? ISAEL??? HUH??? How can I help you today?😁 Are you jewish?",
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
          character: character, // Send selected character to backend
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
      <Navbar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        character={character}
        setCharacter={setCharacter}
      />
      <div className="chat-container">
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
            placeholder="Enter your prompt..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
