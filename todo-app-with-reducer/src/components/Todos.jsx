import React, { memo } from "react";
import TodoItems from "../components/TodoItems";
const Todos = ({ todos }) => {
  return (
    <ul>
      {console.log("todos added")}
      {todos.map((todo, i) => {
        return <TodoItems key={i} todo={todo} i={i} />;
      })}
    </ul>
  );
};

export default memo(Todos);
