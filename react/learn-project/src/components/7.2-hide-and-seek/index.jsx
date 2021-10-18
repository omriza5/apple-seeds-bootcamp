import React from "react";
import { useState } from "react";
import "./style.css";

const HideAndSeek = () => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <input
        type="button"
        onClick={handleClick}
        value={isHidden ? "show" : "hide"}
        style={{ fontSize: "3rem" }}
      />
      {!isHidden && <div className="box"></div>}
    </>
  );
};

export default HideAndSeek;
