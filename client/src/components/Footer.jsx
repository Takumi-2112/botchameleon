import "../styles/Footer.css";
import botChameleonLogo from "../assets/bot-chameleon.png";  

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="master-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} BotChameleon</p>
        <div className="bot-footer">
          <img className="bot-footer-img" src={botChameleonLogo} alt="D2V Labs logo" />
        </div>
        <div className="footer-links">
          <a href="https://github.com/Takumi-2112/botchameleon"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}