import React, { useState, useEffect } from "react";
import { cloneDeep } from "lodash";
import "./style.css";

const numbers = ["one", "two", "three", "four", "five"];

const MarkingAndDeleting = () => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [originalCheckboxes, setOriginalCheckboxes] = useState([]);
  useEffect(() => {
    const mapped = numbers.map((number, index) => ({
      id: index,
      value: number,
      isChecked: false,
    }));
    setCheckboxes(mapped);
    setOriginalCheckboxes(mapped);
  }, []);

  const handleCheckboxClick = (id) => {
    const newCheckboxes = cloneDeep(checkboxes);
    const checkbox = newCheckboxes.find((check) => check.id === id);
    checkbox.isChecked = !checkbox.isChecked;

    setCheckboxes(newCheckboxes);
  };

  const handleDelete = () => {
    const newCheckboxes = cloneDeep(checkboxes);
    const filtered = newCheckboxes.filter((cb) => !cb.isChecked);
    setCheckboxes(filtered);
  };
  const handleReset = () => {
    setCheckboxes(originalCheckboxes);
  };

  return (
    <>
      {
        <div className="checkboxes">
          <div className="checkbox-button">
            <input type="submit" value="DELETE" onClick={handleDelete} />
            <input type="submit" value="RESET" onClick={handleReset} />
          </div>
          {checkboxes.map((checkbox) => (
            <div className="checkbox" key={checkbox.id}>
              <input
                type="checkbox"
                value={checkbox.value}
                onChange={() => handleCheckboxClick(checkbox.id)}
              />
              <label htmlFor={checkbox.value}>{checkbox.value}</label>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default MarkingAndDeleting;
