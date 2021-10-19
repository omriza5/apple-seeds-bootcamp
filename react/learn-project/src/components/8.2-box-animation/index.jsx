import React from "react";

import "./style.css";

class BoxAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 1000);
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 4000);
  }
  render() {
    return (
      <>
        {this.state.isVisible && (
          <>
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </>
        )}
      </>
    );
  }
}

export default BoxAnimation;
