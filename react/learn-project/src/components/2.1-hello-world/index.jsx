import React, { useEffect } from "react";

const HelloWorld = () => {
  useEffect(() => {
    document.title = "AppleSeeds React App";
  }, []);
  return <h1>exercise 2.1 Hello world</h1>;
};

export default HelloWorld;
