import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const TodoApp = () => {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      <ul>
        {todos &&
          todos.map((elem) => {
            return <li key={elem.id}>{elem.tittle}</li>;
          })}
      </ul>
    </>
  );
};

export default TodoApp;
