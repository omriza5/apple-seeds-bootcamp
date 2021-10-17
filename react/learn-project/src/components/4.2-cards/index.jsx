import React, { useEffect, useState } from "react";
import Button from "../4.1-buttons";
import "./style.css";

const buttonStyle = {
  border: "none",
  color: "gold",
  background: "none",
  fontWeight: "bold",
  marginRight: "1.5rem",
};
const Card = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const getRandomImg = async () => {
      const { url } = await fetch("https://source.unsplash.com/random", {
        method: "GET",
      });
      //   const data = await response.json();
      setImg(url);
    };
    getRandomImg();
  }, []);

  return (
    <>
      <div className="card">
        <div className="img-card">
          <img src={img || ""} alt="random Img" />
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
};

export default Card;
