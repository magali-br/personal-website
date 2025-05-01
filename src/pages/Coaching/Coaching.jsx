import "./Coaching.css";
import React, { useEffect, useState } from "react";
import valuesFile from "../../values.json";

function Coaching() {
    const getRandomObject = (array) => {
        const randomObject = array[Math.floor(Math.random() * array.length)];
        return randomObject;
    };

    const [randomValue, setRandomValue] = useState(null);
    const regenerateValue = () => {
        setRandomValue(getRandomObject(valuesFile));
    };

    return (
        <div className="Container">
            <h2 className="Subtitle">
                Values Generator
            </h2>
            <p>
                If you're looking for inspiration for what you could be focussing on in your life right now, values are a great tool.
            </p>
            <p>Generate a value and see if it feels aligned. If it doesn't, just generate another. Stay with this value for the day or for the week, and see how it feels and what comes up.
            </p>
            <div className="Interactive">
                <button type="button" onClick={regenerateValue}>
                    Generate a value
                </button>
                <p>
                    {randomValue}
                </p>
            </div>
        </div>
    );
}

export default Coaching;
