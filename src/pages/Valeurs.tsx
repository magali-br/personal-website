import "./CoachingTools.css";
import valuesFile from "../valeurs.json";

export const Valeurs = () => {
  return (
    <div className="CoachingTools Container">
      <h1 className="Subtitle">Valeurs</h1>
      {valuesFile.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
