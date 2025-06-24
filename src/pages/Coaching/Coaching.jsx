import "./Coaching.css";
import React, { useEffect, useState } from "react";
import valuesFile from "../../values.json";

function Coaching() {
  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject.toLowerCase();
  };

  const [randomValue, setRandomValue] = useState(null);
  const regenerateValue = () => {
    setRandomValue(getRandomObject(valuesFile));
  };

  return (
    <div className="Coaching Container">
      <h1 className="Subtitle">What is coaching?</h1>
      <div className="TextContent">
        I am passionate about the coaching modality because I don't think any of
        us need to be told what to do, and I deeply believe that for change to
        last, it must come from within. Coaching creates a safe space for you to
        reflect, process, and express yourself. It amplifies your voice and
        helps surface what is already inside of you.
      </div>
      <h2 className="Subsubtitle">Coaching is... witnessing.</h2>
      <div className="TextContent">
        I spent so long repressing so many parts of me that in order to heal, I
        needed to welcome back everything I had labelled as negative: all my
        dark or "wrong" emotions, my indecisiveness, my needs, my frustrations
        with my life. But there were times when I couldn't move forward alone.
        When I needed someone to hear me, witness what I'd been through, and
        feel the pain with me. I've been through a lot, but I wasn't able to
        validate that in myself until my coach did.
      </div>
      <h2 className="Subsubtitle">Coaching is... freeing.</h2>
      <div className="TextContent">
        My vision is for every single one of us to set ourselves free from any
        expectations that are causing us pain - society's, our family's, our
        job's, our inner critic's. I help my clients distinguish between what
        they actually want and what they think they want; to hear what their
        heart and gut are actually saying, underneath all the noise. Because
        it's a noisy world we live in, and as empaths, our own voice gets
        drowned out.
      </div>
      <h2 className="Subsubtitle">Coaching is... empowering.</h2>
      <div className="TextContent">
        Coaching empowers you to design and create a life that you want and to
        generate your own solutions. I hold space for you to dig deep within
        yourself and come up with ideas and solutions that fit you on a
        fundamental level.
      </div>
      <h2 className="Subsubtitle">Coaching is... mentoring (sometimes).</h2>
      <div className="TextContent">
        As your coach, I might sometimes mentor you and something I think might
        help, but I always ask you to be radically honest about how my idea sits
        with you. Once we find an idea that feels good, I'll ask you to
        experiment with implementing them and come back and tell me what worked
        and what didn't so that we can dig even deeper and find paths that
        really work for you.
      </div>
      <h2 className="Subsubtitle">Coaching is... changing.</h2>
      <div className="TextContent">
        Coaching is about digging deep into how you see yourself and any
        limiting beliefs you hold about yourself or the world. If you choose it,
        this allows you to rewrite how you see yourself and how you interact
        with the world. Awareness is always the first step to change... and
        sometimes it's enough.
      </div>
      <h1 className="Subtitle">Coaching Tools</h1>
      <h2 className="Subsubtitle">Values Generator</h2>
      <div className="Interactive">
        <button type="button" onClick={regenerateValue}>
          Generate a value
        </button>
        <div className="ValueName">{randomValue}</div>
      </div>
      <div className="TextContent">
        Values are a great tool for living more purposefully. The first step is
        to figure out what values are important to you, then to try to align
        your life more with them.
      </div>
      <div className="TextContent">
        If life feels a bit aimless or overwhelming right now, or if you're just
        looking for some inspiration, generate a value and see how it feels. If
        it doesn't feel aligned, generate another.
      </div>
      <div className="TextContent">
        Once you have a value that feels good, play around with it. Stick with
        it for the day or for the week, and see what comes up and what it feels
        to live with that value in mind.
      </div>
    </div>
  );
}

export default Coaching;
