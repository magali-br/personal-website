import "./About.css";

function About() {
  return (
    <div className="About Container">
      <div className="AboutQuestion">
        <h2 className="Subtitle">Who is Magali?</h2>
        <p>
          I'm a software engineer, linguist, dancer, writer, and coach, passionate about experiencing wonder and making the world a better place. <br /> <br />
          As a generalist who never gets tired of jumping into new projects, I love to explore, discover, and connect ideas. I am a shapeshifter, travelling between worlds and balancing out the specialists who prefer to dive deep.
        </p>
      </div>
      <div className="AboutQuestion">
        <h2 className="Subtitle">How do you pronounce your name?</h2>
        <p>
          My name is Magali, pronounced
          <li>['ma:gəli] i.e. MAH-guh-lee in English,</li>
          <li>[maga'li:] i.e. ma-ga-LEE in French.</li>
        </p>
      </div>
      <div>
        <h2 className="Subtitle">Anything to add?</h2>
        <p>
          Is there is a language resource you'd like to contribute or see here? Do you have a question on a recipe? Maybe you have a comment to make? Send me a message on{" "}
          <a
            className="BoldUnderlined Link"
            href="https://www.linkedin.com/in/magali-br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
