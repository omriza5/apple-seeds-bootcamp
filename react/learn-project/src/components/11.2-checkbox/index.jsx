import React, { useState, useEffect } from "react";
import Checkbox from "./checkbox";

const CheckboxList = () => {
  const [checkboxData, setCheckboxData] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, label: "I read the term of the app", isChecked: false },
      { id: 2, label: "I accept the term of the app", isChecked: false },
      { id: 3, label: "I Want to get the weekly news letter", isChecked: true },
      { id: 4, label: "I Want to get sales and offers", isChecked: true },
    ];
    setCheckboxData(data);
  }, []);

  const handleInputChange = (checkboxId) => {
    const newCheckboxData = [...checkboxData];
    const pressedCheckbox = newCheckboxData.find(
      (item) => item.id === checkboxId
    );
    pressedCheckbox.isChecked = !pressedCheckbox.isChecked;

    setCheckboxData(newCheckboxData);
  };
  return (
    <>
      {checkboxData.map((item) => (
        <div className="checkbox-list">
          <Checkbox
            item={item}
            key={item.id}
            onInputChange={handleInputChange}
          />
        </div>
      ))}
    </>
  );
};

export default CheckboxList;
