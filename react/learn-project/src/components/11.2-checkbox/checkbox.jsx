import React from "react";
import "./style.css";

const Checkbox = ({ item, onInputChange }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => onInputChange(item.id)}
        value={item.isChecked}
      />
      <div className="checkboxLabel">
        <label htmlFor={item.label}>{item.label}</label>
      </div>
    </div>
  );
};

export default Checkbox;
