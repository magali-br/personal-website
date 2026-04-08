import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const coachingInterestFormExternalUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSd6t-RtpoJajc7flzHLep92ICEs2UvaOvpqUlUOK92pgkBLVw/viewform?usp=header";

  return (
    <div className="Home Container">
      <div className="HomeQuestion">
        <h1 className="Subtitle">Hi, I'm Magali. Welcome to my many worlds.</h1>
        <img
          className="HomeImage"
          src={"/img/magali_dandelion.jpg"}
          alt={
            "A photo of Magali posing in front of a white wall with a dandelion and bird sticker on it."
          }
        />
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
      <div className="HomeQuestion">
        <h1 className="Subtitle">Contact</h1>
        <p>
          Curious about working with me as a{" "}
          <Link className="VisibleLink" to="/coaching">
            {"  "}coach
          </Link>
          ? Don't hesitate to fill out my{" "}
          <a
            className="VisibleLink Link"
            href={coachingInterestFormExternalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            coaching interest form
          </a>
          .
        </p>
        <p>
          {/* Is there is a{" "}
          <Link className="VisibleLink" to="/languages">
            {" "}
            language resources
          </Link>{" "}
          you'd like to contribute or see here? Do you have a question Home a{" "}
          <Link className="VisibleLink" to="/recipes">
            {" "}
            recipe
          </Link>
          , or a comment on a{" "}
          <Link className="VisibleLink" to="/books">
            {" "}
            book recommendation
          </Link>
          ?  */}
          You can also send me a message on{" "}
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
