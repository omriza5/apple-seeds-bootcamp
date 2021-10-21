import React from "react";
import "./style.css";

const FormSelect = ({ selectData, value, onInputChange, name }) => {
  return (
    <div className="formSelect-selectInput">
      <select value={value} onChange={onInputChange} name={name}>
        {selectData.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
