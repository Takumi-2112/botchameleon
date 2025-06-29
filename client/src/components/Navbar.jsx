import "../styles/Navbar.css";
import botChameleleonLogo from "../assets/bot-chameleon.png";
import benderLogo from "../assets/bender.png";
import pirateLogo from "../assets/pirate.png";
import shakespeareLogo from "../assets/shake.png";
import marioLogo from "../assets/mario.png";
import snoopLogo from "../assets/snoop.png";
import trumpLogo from "../assets/donald.png";
import yodaLogo from "../assets/yoda.png";
import rickLogo from "../assets/rick.png";
import yeLogo from "../assets/ye.png";

export default function Navbar({
  menuOpen,
  toggleMenu,
  character,
  setCharacter,
}) {
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
          <div className="nav-face">
            {character === "bender" && (
              <img src={benderLogo} alt="Bender" className="nav-img" />
            )}
            {character === "pirate" && (
              <img src={pirateLogo} alt="Pirate" className="nav-img" />
            )}
            {character === "shakespeare" && (
              <img
                src={shakespeareLogo}
                alt="Shakespeare"
                className="nav-img"
              />
            )}
            {character === "mario" && (
              <img src={marioLogo} alt="Mario" className="nav-img" />
            )}
            {character === "snoop" && (
              <img src={snoopLogo} alt="Snoop Dogg" className="nav-img" />
            )}
            {character === "trump" && (
              <img src={trumpLogo} alt="Donald Trump" className="nav-img" />
            )}
            {character === "yoda" && (
              <img src={yodaLogo} alt="Yoda" className="nav-img" />
            )}
            {character === "rick" && (
              <img src={rickLogo} alt="Rick Sanchez" className="nav-img" />
            )}
            {character === "ye" && (
              <img src={yeLogo} alt="Kanye West" className="nav-img" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
