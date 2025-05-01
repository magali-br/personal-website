import "./Languages.css";

function Languages() {
    return (
        <div className="Languages Container">
            <h2 className="Subtitle">
                bienvenue - welcome - willkommen - bienvenidos - أهلا وسهلا - dobrodošli - bonvenon - céad míle fáilte - degemer mat - خوش آمدید - स्वागत - bainvegni
            </h2>
            <p>
                That was a sample of the languages I've fallen in love with over the course of my life. <br /> <br />
                Which might explain why I have so many resources to share...
            </p>

            <h2 className="Subtitle">General resources</h2>
            <div className="LanguageResource">
                <span className="LanguageResourceTitle">Linguee</span>: An amazing resource for translation that allows you to find your word or expression in context and make sure you find an appropriate translation. (
                <a
                    className="LanguageResourceLink"
                    href="https://www.linguee.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linguee.com
                </a>
                , and there are other versions if you want to translate between two languages that are not English, e.g.
                <a
                    className="LanguageResourceLink"
                    href="https://www.linguee.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linguee.fr
                </a>,
                <a
                    className="LanguageResourceLink"
                    href="https://www.linguee.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linguee.es
                </a>,
                etc)
            </div>
            <div className="LanguageResource">
                <span className="LanguageResourceTitle">Omniglot</span>: An encyclopedia of all writing systems, languages, constructed languages, etc. A treasure trove for geeking out! (
                <a
                    className="LanguageResourceLink"
                    href="https://www.omniglot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    omniglot.com
                </a>
                )
            </div>

            <h2 className="Subtitle">German</h2>
            <div className="LanguageResource">
                <span className="LanguageResourceTitle">Dictionary</span>: I love Leo! You can translate from any language into German, and the user discussions about words or expressions can be really useful (
                <a
                    className="LanguageResourceLink"
                    href="https://dict.leo.org/german-english/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    dict.leo.org
                </a>
                ).
            </div>

            <h2 className="Subtitle">Swiss German</h2>
            <div className="LanguageResource">
                <span className="LanguageResourceTitle">Dictionary</span>: No good dictionary found so far. I'm very bitter about this.
            </div>
            <div className="LanguageResource">
                <span className="LanguageResourceTitle">Music</span>: So much good music.
            </div>


        </div>
    );
}

export default Languages;
