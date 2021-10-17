import React from "react";

const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";

const BasicOfJsx = () => {
  return (
    <>
      {data.map((word) => (
        <span>{word} </span>
      ))}

      <div>
        <span>{`${number1} + ${number2} = ${number1 + number2} `}</span>
      </div>
      <div>
        <span>{`The string’s length is: ${string.length}`}</span>
      </div>
    </>
  );
};

export default BasicOfJsx;
