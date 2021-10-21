import React from "react";
import "./style.css";

const FormButton = ({ value, onButtonClick }) => {
  return (
    <input
      className="formButton"
      type="submit"
      value={value}
      onClick={onButtonClick}
    />
  );
};

export default FormButton;
