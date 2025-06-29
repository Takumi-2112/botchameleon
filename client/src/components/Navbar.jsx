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
import boratLogo from "../assets/borat.png";

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
              className="navbar-img-desk"
              alt="BotChameleon Logo"
            />
          </div>
          <h1>BotChameleon</h1>
        </div>
        {/* Mobile toggle image (replaces hamburger on small screens) */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {character === "botchameleon" && (
            <img
              src={botChameleleonLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "bender" && (
            <img
              src={benderLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "pirate" && (
            <img
              src={pirateLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "shakespeare" && (
            <img
              src={shakespeareLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "mario" && (
            <img
              src={marioLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "snoop" && (
            <img
              src={snoopLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "trump" && (
            <img
              src={trumpLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "yoda" && (
            <img
              src={yodaLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "rick" && (
            <img
              src={rickLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
          {character === "ye" && (
            <img src={yeLogo} alt="Toggle Menu" className="mobile-toggle-img" />
          )}
          {character === "borat" && (
            <img
              src={boratLogo}
              alt="Toggle Menu"
              className="mobile-toggle-img"
            />
          )}
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
                <option onClick={toggleMenu} value="botchameleon">BotChameleon</option>
                <option onClick={toggleMenu} value="bender">Bender</option>
                <option onClick={toggleMenu} value="pirate">Pirate</option>
                <option onClick={toggleMenu} value="shakespeare">Shakespeare</option>
                <option onClick={toggleMenu} value="mario">Mario</option>
                <option onClick={toggleMenu} value="snoop">Snoop Dogg</option>
                <option onClick={toggleMenu} value="trump">Donald Trump</option>
                <option onClick={toggleMenu} value="yoda">Yoda</option>
                <option onClick={toggleMenu} value="rick">Rick Sanchez</option>
                <option onClick={toggleMenu} value="ye">Kanye West</option>
                <option onClick={toggleMenu} value="borat">Borat</option>
              </select>
            </span>
          </button>
          <div className="nav-face">
            {character === "bender" && (
              <img src={benderLogo} alt="Bender" className="nav-img-desk" />
            )}
            {character === "pirate" && (
              <img src={pirateLogo} alt="Pirate" className="nav-img-desk" />
            )}
            {character === "shakespeare" && (
              <img
                src={shakespeareLogo}
                alt="Shakespeare"
                className="nav-img-desk"
              />
            )}
            {character === "mario" && (
              <img src={marioLogo} alt="Mario" className="nav-img-desk" />
            )}
            {character === "snoop" && (
              <img src={snoopLogo} alt="Snoop Dogg" className="nav-img-desk" />
            )}
            {character === "trump" && (
              <img
                src={trumpLogo}
                alt="Donald Trump"
                className="nav-img-desk"
              />
            )}
            {character === "yoda" && (
              <img src={yodaLogo} alt="Yoda" className="nav-img-desk" />
            )}
            {character === "rick" && (
              <img src={rickLogo} alt="Rick Sanchez" className="nav-img-desk" />
            )}
            {character === "ye" && (
              <img src={yeLogo} alt="Kanye West" className="nav-img-desk" />
            )}
            {character === "borat" && (
              <img src={boratLogo} alt="Borat" className="nav-img-desk" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
