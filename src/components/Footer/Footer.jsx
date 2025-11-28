import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return <div className="Footer">© {currentYear}, by Magali Boizot Roche.</div>;
}

export default Footer;
