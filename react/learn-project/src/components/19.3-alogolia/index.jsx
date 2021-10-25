import React, { useState, useEffect } from "react";
import Spinner from "../spinner";
import "./style.css";

const apiEndPoint = "https://hn.algolia.com/api/v1/search?query=";
const Algolia = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("hooks");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${apiEndPoint}${query}`);
        const { hits } = await response.json();
        setHits(hits);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    getData();
  }, [query]);

  const handleClick = () => {
    setQuery(userInput);
  };

  return (
    <>
      <input
        style={{ fontSize: "2.5rem" }}
        type="text"
        onChange={(e) => setUserInput(e.currentTarget.value)}
      />
      <input
        style={{ fontSize: "2.5rem" }}
        type="button"
        value="Submit"
        onClick={handleClick}
      />
      <div className="hits-container">
        {hits.length === 0 && <Spinner />}
        <ul>
          {hits.map((hit) => (
            <li style={{ fontSize: "1.5rem" }} key={hit.created_at}>
              {hit.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Algolia;
