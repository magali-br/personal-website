import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">
        <div className="NavbarTitle">Magali Boizot Roche</div>
      </Link>
      <div className="MenuItems">
        <div className="MenuItemContainer">
          <Link className="MenuItem" to="/coaching">
            {"coaching"}
          </Link>
        </div>
        {/* <div className="MenuItemContainer">
          <Link className="MenuItem" to="/blog">
            {"blog"}
          </Link>
        </div> */}
        {/* <div className="MenuItemContainer">
          <Link className="MenuItem" to="/coachingtools">
            {"coaching tools"}
          </Link>
        </div> */}
        <div className="MenuItemContainer">
          <Link className="MenuItem" to="/books">
            {"reading"}
          </Link>
        </div>
        {/* <div className="MenuItemContainer">
          <Link className="MenuItem" to="/languages">
            {"languages"}
          </Link>
        </div> */}
        <div className="MenuItemContainer">
          <Link className="MenuItem" to="/recipes">
            {"recipes"}
          </Link>
        </div>
        <div className="MenuItemContainer">
          <Link className="MenuItem" to="/about">
            {"about"}
          </Link>
        </div>
      </div>
    </div>
  );
};
