import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const coachingInterestFormExternalUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSd6t-RtpoJajc7flzHLep92ICEs2UvaOvpqUlUOK92pgkBLVw/viewform?usp=header";

  const navigateToExternalUrl = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="Container">
      <h1 className="TextTitle">I'm Magali. Welcome.</h1>
      <img
        className="ImageSmallVertical"
        src={"/img/magali_dandelion.jpg"}
        alt={
          "A photo of Magali posing in front of a white wall with a dandelion and bird sticker on it."
        }
      />
      <div>
        <p>Do you want to work with me as a coach?</p>
        <p className="NavigationButton">
          <a
            href={coachingInterestFormExternalUrl}
            target="_blank"
            rel="noreferrer"
            className="ButtonStyle"
          >
            Yes! I'm interested
          </a>
        </p>
        Curious to learn more about coaching?
        <p className="NavigationButton">
          <Link to="/coaching" className="ButtonStyle">
            Learn more about coaching
          </Link>
        </p>
        Questions? Send me a message on{" "}
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
      </div>
    </div>
  );
};
