import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="FooterBackground">
      <span className="Footer">
        <span className="FooterTextLink">
          <Link to="/">{"Home"}</Link>
          <a
            className="Link"
            href="https://www.instagram.com/offbeatcoaching/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="FooterIcon"
              src={"/img/instagram_logo_white.png"}
              alt={"Instagram account"}
            />
          </a>
          <a
            className="Link"
            href="https://www.facebook.com/offbeatcoaching/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="FooterIcon"
              src={"/img/facebook-24x24.png"}
              alt={"Facebook account"}
            />
          </a>
          <a
            className="Link"
            href="https://www.linkedin.com/in/magali-br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="FooterIcon"
              src={"/img/linkedin-24x24.png"}
              alt={"Instagram account"}
            />
          </a>
        </span>

        <span>© {currentYear}, Magali Boizot Roche.</span>
      </span>
    </div>
  );
}

export default Footer;
