import React from "react";

const Button = ({ value, buttonStyle }) => {
  return <input type="submit" value={value} style={{ ...buttonStyle }} />;
};

export default Button;
