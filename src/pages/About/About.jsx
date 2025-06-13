import "./About.css";

function About() {
  return (
    <div className="About Container">
      <div className="AboutQuestion">
        <h2 className="Subtitle">Hi, I'm Magali.</h2>
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
          place. <br /> <br />
          As a generalist who never gets tired of jumping into new projects, I
          love to explore, discover, and connect ideas. I am a shapeshifter,
          travelling between worlds and balancing out the specialists who prefer
          to dive deep.
        </p>
      </div>
      <div className="AboutQuestion">
        <h2 className="Subtitle">How do you pronounce that?</h2>
        <p>
          My name is Magali, pronounced
          <li>['mæ:gəli] i.e. MA-guh-lee in English,</li>
          <li>[maga'li:] i.e. ma-ga-LEE in French, Spanish, or German.</li>
        </p>
      </div>
    </div>
  );
}

export default About;
