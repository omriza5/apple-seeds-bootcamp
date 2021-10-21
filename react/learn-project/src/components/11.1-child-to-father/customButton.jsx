import React from "react";
import "./style.css";
const CustomButton = ({ value, onButtonClick }) => {
  return (
    <input
      className="childToParent-btn"
      type="button"
      style={{ background: value }}
      value={value}
      onClick={() => onButtonClick(value)}
    />
  );
};

export default CustomButton;
