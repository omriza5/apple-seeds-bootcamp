import React, { useState, useEffect } from "react";
import Button from "./button";
import AvatarList from "./avatarList";
import Input from "./input";
import "./style.css";
const AvatarExercise = () => {
  const [avatars, setAvatars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFilterd] = useState([]);

  useEffect(() => {
    const getRandomAvatars = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const { results: avatars } = await response.json();
        setAvatars(avatars);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    getRandomAvatars();
  }, []);
  const handleUnputChange = (e) => {
    const filtered = [...avatars].filter((avatar) =>
      avatar.name.first.includes(e.currentTarget.value)
    );
    setFilterd(filtered);
    setSearchQuery(e.currentTarget.value);
  };

  const handleFilter = () => {
    const filtered = [...avatars].filte((avatar) =>
      avatar.name.first.includes(searchQuery)
    );
    setFilterd(filtered);
  };

  return (
    <>
      <div className="avatar-filter">
        <Input value={searchQuery} onInputChange={handleUnputChange} />
        <Button value="Filter" onBtnClick={handleFilter} />
      </div>
      <div className="avatars-list">
        <AvatarList avatars={filtered.length > 0 ? filtered : avatars} />
      </div>
    </>
  );
};

export default AvatarExercise;
