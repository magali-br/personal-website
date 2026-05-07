import valuesFile from "../values.json";

export const Values = () => {
  return (
    <div className="Container">
      <h1 className="Subtitle">Values</h1>
      {valuesFile.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
