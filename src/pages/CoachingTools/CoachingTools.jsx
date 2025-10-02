import "./CoachingTools.css";
import React, { useState } from "react";
import valuesFile from "../../values.json";
import { Link } from "react-router-dom";

function CoachingTools() {
  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject.toLowerCase();
  };

  const [randomValue, setRandomValue] = useState(null);
  const regenerateValue = () => {
    setRandomValue(getRandomObject(valuesFile));
  };

  return (
    <div className="CoachingTools Container">
      <h1 className="Subtitle">Coaching Tools</h1>
      <h2 className="Subsubtitle">Lists of Values</h2>
      <div className="TextContent">
        Values are a great tool for living more purposefully. The first step is
        to figure out what values are important to you, then to try to align
        your life more with them.
      </div>

      <div className="TextContent">
        <Link className="VisibleLink" to="/values">
          {"  "}list of values (English)
        </Link>
      </div>
      <div className="TextContent">
        <Link className="VisibleLink" to="/valeurs">
          {"  "}liste de valeurs (français)
        </Link>
      </div>
      <h2 className="Subsubtitle">Values Generator</h2>
      <div className="Interactive">
        <button type="button" onClick={regenerateValue}>
          Generate a value
        </button>
        <div className="ValueName">{randomValue}</div>
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

export default CoachingTools;
