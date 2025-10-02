import "./CoachingTools.css";
import valuesFile from "../../values.json";

function Values() {
  return (
    <div className="CoachingTools Container">
      <h1 className="Subtitle">Values</h1>
      {valuesFile.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Values;
