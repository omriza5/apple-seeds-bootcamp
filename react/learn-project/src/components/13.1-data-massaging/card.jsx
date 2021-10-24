import React from "react";
import "./style.css";
const Card = ({ person }) => {
  return (
    <>
      <div className="card">
        <p style={{ fontSize: "2.5rem" }}>{person.name}</p>
        <p style={{ fontSize: "2.5rem" }}>{person.birthday}</p>
        <div className="data-massaging-list">
          {person.favoriteFoods.fish.map((fish, index) => (
            <span key={index}>{fish},</span>
          ))}
        </div>
        <div className="data-massaging-list">
          {person.favoriteFoods.meats.map((meat, index) => (
            <span className="data-massaging-list" key={index}>
              {meat},
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
