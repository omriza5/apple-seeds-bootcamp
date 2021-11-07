import React, { useState, useEffect } from "react";
import axios from "axios";

const apiEndPoint = "https://6177fd8c9c328300175f5cea.mockapi.io/";
const MiniCrudProject = () => {
  const [users, setUsers] = useState([]);
  const [formInput, setFormInput] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(apiEndPoint + "users");
      setUsers(data);
    };
    getData();
  }, []);

  const handleUserAdd = async () => {
    const originalUsers = [...users];
    try {
      const newUsers = [...users];
      newUsers.push({ id: "50", name: formInput, country: "israel", age: 32 });
      setUsers(newUsers.reverse());
      await axios.post(apiEndPoint + "userss", {
        name: formInput,
      });

      setFormInput("");
    } catch (error) {
      setTimeout(() => {
        setUsers(originalUsers);
        setFormInput("");
        console.log("error");
      }, 3000);
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id}>
            <div
              className="user"
              style={{ fontSize: "3rem", fontWeight: "bold", padding: "1rem" }}
            >
              <p>Time Creation: {user.createdAt}</p>
              <p>Name: {user.name}</p>
              <p>Country: {user.country}</p>
              <p>Age: {user.age % 100}</p>
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
      <div className="user-form" style={{ fontSize: "2.5rem" }}>
        <input
          type="text"
          onChange={(e) => setFormInput(e.currentTarget.value)}
        />
        <input type="button" value="Add User" onClick={handleUserAdd} />
      </div>
    </div>
  );
};

export default MiniCrudProject;
