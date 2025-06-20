import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home Container">
      <h1 className="Subtitle">Welcome to Magali's many worlds.</h1>
      <p>
        Read{" "}
        <Link className="VisibleLink" to="/about">
          about me
        </Link>{" "}
        or come explore
        <Link className="VisibleLink" to="/recipes">
          {" "}
          recipes
        </Link>
        ,
        <Link className="VisibleLink" to="/languages">
          {" "}
          language resources
        </Link>
        ,
        <Link className="VisibleLink" to="/books">
          {" "}
          book recommendations
        </Link>
        ,
        <Link className="VisibleLink" to="/coaching">
          {"  "}coaching tools
        </Link>
        ...
      </p>
      <div>
        <h1 className="Subtitle">Something to say?</h1>
        <p>Are you curious about working with me as a coach?</p>
        <p>
          Is there is a language resource you'd like to contribute or see here?
        </p>
        <p>Do you have a question about a recipe, or a comment on a book?</p>
        <p>
          {" "}
          Send me a message on{" "}
          <a
            className="VisibleLink Link"
            href="https://www.linkedin.com/in/magali-br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            className="VisibleLink Link"
            href="https://www.instagram.com/offbeatcoaching/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Home;
