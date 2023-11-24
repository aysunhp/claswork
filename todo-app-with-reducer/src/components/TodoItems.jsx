import React, { memo } from "react";

const TodoItems = ({ todo }) => {
  console.log("todo item");
  return <li>{todo}</li>;
};

export default memo(TodoItems);
