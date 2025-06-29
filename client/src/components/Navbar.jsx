import "../styles/Navbar.css";
import botChameleleonLogo from "../assets/bot-chameleon.png";

export default function Navbar({ menuOpen, toggleMenu, character, setCharacter }) {
  return (
    <nav className="navbar-master">
      <div className="navbar-content">
        <div className="navbar-title">
          <div className="navbar-logo">
            <img
              src={botChameleleonLogo}
              className="navbar-img"
              alt="BotChameleon Logo"
            />
          </div>
          <h1>BotChameleon</h1>
        </div>
        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <div className="link">
            <button className="nav-button">
              <span>
                {" "}
                <select
                  id="character"
                  value={character}
                  onChange={(e) => setCharacter(e.target.value)}
                >
                  <option value="botchameleon">BotChameleon</option>
                  <option value="bender">Bender</option>
                  <option value="pirate">Pirate</option>
                  <option value="shakespeare">Shakespeare</option>
                  <option value="mario">Mario</option>
                  <option value="snoop">Snoop Dogg</option>
                  <option value="trump">Donald Trump</option>
                  <option value="yoda">Yoda</option>
                  <option value="rick">Rick Sanchez</option>
                  <option value="ye">Kanye West</option>
                </select>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
