import React from "react";
import Button from "../4.1-buttons";

const buttonStyle = {
  border: "none",
  color: "gold",
  background: "none",
  fontWeight: "bold",
  marginRight: "1.5rem",
};
class Card extends React.Component {
  constructor() {
    super();
    this.state = { img: "" };
  }

  async componentDidMount() {
    const { url } = await fetch("https://source.unsplash.com/random");

    this.setState({ img: url });
  }
  render() {
    const { img } = this.state;
    return (
      <>
        <div className="card">
          <div className="img-card">
            {img && <img src={img || ""} alt="random Img" />}
          </div>
          <div className="card-content">
            <h1 className="card-title">Omri's Card</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              excepturi beatae reiciendis error fugit modi.
            </p>
            <div className="card-buttons">
              <Button value="SHARE" buttonStyle={buttonStyle} />
              <Button value="EXPLORE" buttonStyle={buttonStyle} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
