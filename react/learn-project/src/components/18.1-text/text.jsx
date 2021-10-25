import React, { useState } from "react";
import "./style.css";
const Text = ({ text, maxLength }) => {
  const [isHidden, setIsHidden] = useState(true);

  const showText = () => {
    if (isHidden) {
      return text.substr(0, maxLength);
    }
    return text;
  };
  return (
    <>
      <p style={{ fontSize: "2.5rem" }}>
        {showText()}
        {text.length > maxLength ? (
          <span onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? (
              <span className="read">...Read More</span>
            ) : (
              <span className="read">Read Less</span>
            )}
          </span>
        ) : (
          ""
        )}
      </p>
    </>
  );
};

export default Text;
