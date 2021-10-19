import React from "react";
import Spinner from "../spinner";

const spinners = [
  <Spinner extraStyle={{ borderTop: "16px solid yellow" }} />,
  <Spinner extraStyle={{ borderTop: "16px solid red" }} />,
  <Spinner />,
];
class SpinnerTimer extends React.Component {
  render() {
    return <div>{spinners[Math.floor(Math.random() * spinners.length)]}</div>;
  }
}

export default SpinnerTimer;
