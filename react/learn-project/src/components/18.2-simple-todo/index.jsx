import React, { useState } from "react";
import "./style.css";

const SimpleTodo = () => {
  const [todos, setTodos] = useState([
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
  ]);

  const handleClick = (todoName) => {
    const newTodos = [...todos];
    const todo = newTodos.find((t) => t.name === todoName);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo">
            <p className={todo.completed ? "checked" : ""}>{todo.name} </p>
            <span onClick={() => handleClick(todo.name)}>
              {todo.completed ? "V" : "X"}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default SimpleTodo;
