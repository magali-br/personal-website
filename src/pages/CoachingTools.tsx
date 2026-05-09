import { useState } from "react";
import valuesFile from "../values.json";
import { useNavigate } from "react-router-dom";

export const CoachingTools = () => {
  const navigate = useNavigate();

  const getRandomString = (array: string[]): string => {
    if (array.length === 0) return "";
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject.toLowerCase();
  };
  const [randomValue, setRandomValue] = useState<string | null>(null);

  const regenerateValue = () => {
    setRandomValue(getRandomString(valuesFile));
  };

  return (
    <div className="Container">
      <h1 className="TextTitle">Coaching Tools</h1>
      <div>
        <h2 className="TextSubtitle">Lists of Values</h2>
        <p>
          Values are a great tool for living more purposefully. The first step
          is to figure out what values are important to you, then to try to
          align your life more with them.
        </p>

        <p>
          <button type="button" onClick={() => navigate("/values")}>
            list of values (English)
          </button>
        </p>
        <p>
          <button type="button" onClick={() => navigate("/valeurs")}>
            liste de valeurs (français)
          </button>
        </p>
      </div>
      <div>
        <h2 className="TextSubtitle">Values Generator</h2>
        <p>
          If life feels a bit aimless or overwhelming right now, or if you're
          just looking for some inspiration, generate a value and see how it
          feels. If it doesn't feel aligned, generate another.
        </p>
        <p>
          <button type="button" onClick={regenerateValue}>
            Generate a value
          </button>
          <span className="CoachingToolsGeneratedValue">{randomValue}</span>
        </p>
        <p>
          Once you have a value that feels good, play around with it. Stick with
          it for the day or for the week, and see what comes up and what it
          feels to live with that value in mind.
        </p>
      </div>
    </div>
  );
};
