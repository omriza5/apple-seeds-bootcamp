import React from "react";

const Names = ({ names }) => {
  console.log(names);
  return (
    <>
      <ol>
        {names.map((person) => (
          <li key={person.id} style={{ fontSize: "3rem" }}>
            {person.name}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Names;
