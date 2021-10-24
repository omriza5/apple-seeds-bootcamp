import React from "react";
import "./style.css";
const Avatar = ({ avatar }) => {
  return (
    <>
      <div className="avatar-card">
        <div className="avatar-header">
          <h1>
            {avatar.name.first} {avatar.name.last}{" "}
          </h1>
        </div>
        <div className="avatr-img">
          <img src={avatar.picture.large} alt="" />
        </div>
      </div>
    </>
  );
};

export default Avatar;
