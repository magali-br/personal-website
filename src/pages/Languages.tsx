export const Languages = () => {
  return (
    <div className="Container">
      <h1 className="Subtitle">
        bienvenue - welcome - willkommen - bienvenidos - أهلا وسهلا - dobrodošli
        - bonvenon - céad míle fáilte - degemer mat - خوش آمدید - स्वागत -
        bainvegni
      </h1>
      <p>
        That was a sample of the languages I've fallen in love with over the
        course of my life. <br /> <br />
        Which might explain why I have so many resources to share...
      </p>

      <div>
        <h1 className="Subtitle">General resources</h1>
        <p>
          <a
            className="VisibleLink"
            href="https://www.linguee.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linguee.com
          </a>
          : An amazing resource for translation that allows you to find your
          word or expression in context and make sure you find an appropriate
          translation. (There are other versions if you want to translate
          between two languages that are not English, e.g.
          <a
            className="VisibleLink"
            href="https://www.linguee.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linguee.fr
          </a>
          ,
          <a
            className="VisibleLink"
            href="https://www.linguee.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linguee.es
          </a>
          , etc.)
        </p>
        <p>
          <a
            className="VisibleLink"
            href="https://www.omniglot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            omniglot.com
          </a>
          : An encyclopedia of all writing systems, languages, constructed
          languages, etc. A treasure trove for geeking out!
        </p>
      </div>

      <div>
        <h1 className="Subtitle">Resources by language</h1>

        <div>
          <h2 className="Subsubtitle">German</h2>
          <p>
            <span className="Bold">Dictionary</span>: I love Leo! You can
            translate from any language into German, and the user discussions
            about words or expressions can be really useful (
            <a
              className="VisibleLink"
              href="https://dict.leo.org/german-english/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dict.leo.org
            </a>
            ).
          </p>
        </div>

        <div>
          <h2 className="Subsubtitle">Swiss German</h2>
          <p>
            <span className="Bold">Dictionary</span>: No good dictionary found
            so far. I'm very bitter about this.
          </p>
          <p>
            <span className="Bold">Music</span>: So much good music.
          </p>
        </div>
      </div>
    </div>
  );
};
