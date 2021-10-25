import React, { useState } from "react";
import Text from "./text";

const someText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi porro fuga quisquam a possimus laboriosam!";
const TextExercise = () => {
  const [text] = useState(someText);
  const [maxLength] = useState(20);

  return <Text text={text} maxLength={maxLength} />;
};

export default TextExercise;
