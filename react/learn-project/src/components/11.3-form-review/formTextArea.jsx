import React from "react";
import "./style.css";

const FormTextArea = ({ name, onInputChange, value }) => {
  return (
    <div className="formInput-textArea">
      <textarea
        name={name}
        onChange={onInputChange}
        value={value}
        rows="5"
        cols="50"
      ></textarea>
    </div>
  );
};

export default FormTextArea;
