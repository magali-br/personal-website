import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About Container">
      <div className="AboutQuestion">
        <h1 className="Subtitle">Hi, I'm Magali. Welcome to my many worlds.</h1>
        <div>
          <img
            className="AboutImage"
            src={"/img/explorer_in_jungle_square.jpg"}
            alt={"A photo of Magali as an explorer, peering out of a jungle"}
          />
        </div>
        <p>
          I'm a coach, linguist, writer, dancer, and software engineer,
          passionate about experiencing wonder and making the world a better
          place.
        </p>
        <p>
          As a generalist who never gets tired of jumping into new projects, I
          love to explore, discover, and connect ideas. I am a shapeshifter,
          travelling between worlds and jumping in and out as I please.
        </p>
      </div>
      <div className="AboutQuestion">
        <h1 className="Subtitle">How do you pronounce that?</h1>
        <p>
          My name is Magali, pronounced
          <li>['mæ:gəli] i.e. MA-guh-lee in English,</li>
          <li>[maga'li:] i.e. ma-ga-LEE in French, Spanish, or German.</li>
        </p>
      </div>
      <div className="AboutQuestion">
        <h1 className="Subtitle">Something to say?</h1>
        <p>
          Are you curious about working with me as a{" "}
          <Link className="VisibleLink" to="/coaching">
            {"  "}coach
          </Link>
          ?{" "}
          <a
            className="VisibleLink Link"
            href="https://tidycal.com/offbeatcoaching"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"  "}Book an introduction call
          </a>
          !
        </p>
        <p>
          Is there is a{" "}
          <Link className="VisibleLink" to="/languages">
            {" "}
            language resources
          </Link>{" "}
          you'd like to contribute or see here?
        </p>
        <p>
          Do you have a question about a{" "}
          <Link className="VisibleLink" to="/recipes">
            {" "}
            recipe
          </Link>
          , or a comment on a{" "}
          <Link className="VisibleLink" to="/books">
            {" "}
            book recommendation
          </Link>
          ?
        </p>
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

export default About;
