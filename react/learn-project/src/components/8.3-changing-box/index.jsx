import React from "react";
import "./style.css";

const colors = ["red", "green", "purple", "yellow", "black"];
class ChangingBox extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  getClass = () => {
    const colorIndex = this.state.counter % colors.length;
    let classes = this.state.counter >= 5 ? "circle" : "box";
    return `${classes} ${colors[colorIndex]}`;
  };
  render() {
    return <div className={this.getClass()}></div>;
  }
}

export default ChangingBox;
