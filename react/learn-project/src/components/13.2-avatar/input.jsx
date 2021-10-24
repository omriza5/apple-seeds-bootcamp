import React from "react";
import "./style.css";
const Input = ({ value, onInputChange }) => {
  return (
    <input
      className="avatar-input"
      type="text"
      onChange={onInputChange}
      value={value}
    />
  );
};

export default Input;
