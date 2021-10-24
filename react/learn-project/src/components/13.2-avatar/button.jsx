import React from "react";
import "./style.css";

const Button = ({ value, onBtnClick }) => {
  return (
    <input
      className="avatar-btn"
      type="submit"
      value={value}
      onClick={onBtnClick}
    />
  );
};

export default Button;
