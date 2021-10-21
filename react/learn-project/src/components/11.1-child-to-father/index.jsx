import React, { useState } from "react";
import CustomButton from "./customButton";
import "./style.css";

const colors = ["blue", "red", "yellow"];

const ChildToFather = () => {
  const [pressedBtn, setPressedBtn] = useState("");
  const handleButtonClick = (value) => {
    setPressedBtn(value);
  };

  const renderColor = () => {
    if (pressedBtn === "blue") return "blueText";
    if (pressedBtn === "red") return "redText";

    return "yellowText";
  };
  return (
    <>
      <div className="childToParent-container">
        {colors.map((color, index) => (
          <CustomButton
            value={color}
            onButtonClick={handleButtonClick}
            key={index}
          />
        ))}
        <p>
          The Color Selected Is:{" "}
          <span className={renderColor()}>{pressedBtn}</span>
        </p>
      </div>
    </>
  );
};

export default ChildToFather;
