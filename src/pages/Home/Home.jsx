import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home Container">
      <h2 className="Subtitle">
        Welcome to Magali's many worlds.
      </h2>
      <p>
        Read{" "}
        <Link className="VisibleLink" to="/about">
          about me
        </Link>
        {" "}or come explore
        <Link className="VisibleLink" to="/languages">
          {" "}language resources
        </Link>
        ,
        <Link className="VisibleLink" to="/books">
          {"  "}book recommendations
        </Link>
        ,
        <Link className="VisibleLink" to="/coaching">
          {"  "}coaching tools
        </Link>...
      </p>
    </div>
  );
}

export default Home;
