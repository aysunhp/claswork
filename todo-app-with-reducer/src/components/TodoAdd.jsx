import React, { memo } from "react";

const TodoAdd = ({ setTodo, addTodo, todo }) => {
  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={setTodo}
        placeholder="Add new Todo"
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
};

export default memo(TodoAdd);
