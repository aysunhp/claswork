import React, { useState } from "react";
import { addTodo } from "../../redux/slices/TodoSlices";
import { useDispatch, useSelector } from "react-redux";

const AddTodos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setInp("");
          dispatch(addTodo(inp));
          console.log(todos);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodos;
