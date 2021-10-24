import React from "react";
import Avatar from "./avatar";
const AvatarList = ({ avatars }) => {
  return (
    <>
      {avatars &&
        avatars.map((avatar) => <Avatar avatar={avatar} key={avatar.cell} />)}
    </>
  );
};

export default AvatarList;
