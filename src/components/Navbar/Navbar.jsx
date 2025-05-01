import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <div className="Title">Magali Boizot-Roche</div>
      </Link>
      <div className="MenuItems">
        <div className="MenuItemContainer">
          <Link to="/about">
            <span className="MenuItem">about</span>
          </Link>
        </div>
        <div className="MenuItemContainer">
          <Link to="/languages">
            <span className="MenuItem">languages</span>
          </Link>
        </div>
        <div className="MenuItemContainer">
          <Link to="/coaching">
            <span className="MenuItem">coaching</span>
          </Link>
        </div>
        <div className="MenuItemContainer">
          <Link to="/books">
            <span className="MenuItem">books</span>
          </Link>
        </div>
        {/* Recipes and Blog are currently broken upon display */}
        {/* <div className="MenuItemContainer">
          <Link to="/recipes">
            <span className="MenuItem">recipes</span>
          </Link>
        </div>
        <div className="MenuItemContainer">
          <Link to="/blog">
            <span className="MenuItem">blog</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
