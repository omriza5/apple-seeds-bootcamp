import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ favoriteColor: "green" });
    }, 1000);
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    const specialDev = document.querySelector("#special");
    specialDev.innerHTML = `The updated favorite color is ${this.state.favoriteColor}`;
  }
  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <div id="special" style={{ fontSize: "3rem" }}></div>
      </div>
    );
  }
}

export default LifeCycle;
