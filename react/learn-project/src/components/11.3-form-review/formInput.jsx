import React from "react";
import "./style.css";

const FormInput = ({ name, value, onInputChange, placeholder }) => {
  return (
    <div className="formInput-textInput">
      <input
        type="text"
        value={value}
        name={name}
        onChange={onInputChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default FormInput;
