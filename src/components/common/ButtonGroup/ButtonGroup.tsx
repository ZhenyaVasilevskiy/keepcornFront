import React, { useState } from "react";
import "./ButtonGroup.scss";

const Buttons = ["1 day", "7 days", "10 days", "All time"];

const ButtonGroup:React.FC = () => {
  const [clickedId, setClickedId] = useState(1);
  return (
    <div className="buttonGroup">
      {Buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={() => setClickedId(i)}
          className={i === clickedId ? "customButton active" : "customButton"}
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;