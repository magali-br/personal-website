import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  /* With Vista Blue & White branding */
  const ig_logo = "/img/instagram-logo-white.png";
  const fb_logo = "/img/facebook-4-512-white.png";
  const li_logo = "/img/linkedin-3-512-white.png";

  /* With Provence Blue & Yellow branding */
  // const ig_logo = "/img/instagram-logo-blueprovence.png";
  // const fb_logo = "/img/facebook-4-512-blueprovence.png";
  // const li_logo = "/img/linkedin-3-512-blueprovence.png";

  return (
    <div className="FooterBackground">
      <span className="FooterInnerBar">
        <span className="FooterLeftBar">
          <Link className="FooterText" to="/">
            {"Home"}
          </Link>
          <a
            className="Link"
            href="https://www.instagram.com/offbeatcoaching/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="FooterIcon"
              src={ig_logo}
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
              src={fb_logo}
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
              src={li_logo}
              alt={"Instagram account"}
            />
          </a>
        </span>

        <span>© {currentYear}, Magali Boizot Roche.</span>
      </span>
    </div>
  );
};
