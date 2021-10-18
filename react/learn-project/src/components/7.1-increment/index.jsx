import React from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  return (
    <>
      <input
        type="button"
        value="Increment"
        onClick={handleIncrement}
        style={{ fontSize: "3rem" }}
      />
      <span>{value}</span>
    </>
  );
};

export default Counter;
