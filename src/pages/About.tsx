import "./About.css";

export const About = () => {
  return (
    <div className="About Container">
      <div className="AboutQuestion">
        <h1 className="Subtitle">Who I am</h1>
        <p>
          I'm a coach, writer, dancer, linguist, and software engineer,
          passionate about experiencing wonder and making the world a better
          place.
        </p>
        <p>
          As a generalist who never gets tired of jumping into new projects, I
          love to explore, discover, and connect ideas. I am a shapeshifter,
          travelling between worlds and jumping in and out as I please.
        </p>
        <img
          className="SmallImageVertical"
          src={"/img/magali_montpellier_cropped.jpg"}
          alt={
            "A photo of Magali with her hand outstretched towards a vine growing on the facade of a white house."
          }
        />
      </div>
      <div className="AboutQuestion">
        <h1 className="Subtitle">My story</h1>
        <div className="TextContent">
          Early in 2024, after ten years in tech, nine years working as a
          software engineer and tech lead at Google, and two long burnouts, I
          finally decided that I'd had enough. I'd been craving new adventures
          and a path that felt more aligned for years, but I couldn't figure out
          in which direction to go, and it was working with a coach that finally
          gave me the courage to take the leap.
        </div>
        <div className="TextContent">
          In June, I left my safe job. The space and time to myself finally gave
          me the energy to make the changes in myself that I had been trying to
          make for years. Six months later, I decided to honour an idea I'd had
          for years and took the leap to becoming a coach.
        </div>
        <div className="TextContent">
          I value deep empathy, honesty, authenticity, and vulnerability. I
          celebrate every act of courage, especially when it comes to digging
          deeper, understanding my triggers, and facing my fears. My favourite
          emotions to experience are joy, awe, and wonder. I live my life in
          pursuit of freedom - liberation from everything that isn't serving me,
          whether expectations or fear, whether internally or externally
          imposed.
        </div>
      </div>
      <div className="AboutQuestion">
        <h1 className="Subtitle">How do you pronounce that?</h1>
        My name is Magali, pronounced
        <ul>
          <li>['mæ:gəli] i.e. MA-guh-lee in English,</li>
          <li>[maga'li:] i.e. ma-ga-LEE in French, Spanish, or German.</li>
        </ul>
      </div>
    </div>
  );
};
