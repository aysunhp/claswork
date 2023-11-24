import React, { memo } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import TodoAdd from "./components/TodoAdd";
import Todos from "../components/Todos";
function reducer(state, action) {
  switch (action.type) {
    case "setTodo":
      return {
        ...state,
        todo: action.todo,
      };
    case "addTodo":
      return {
        todo: "",
        todos: [...state.todos, action.todo],
      };

    default:
      break;
  }
}
const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, {
    todo: "",
    todos: [],
  });
  console.log(state.todo);
  console.log(state.todos);
  const setTodo = useCallback((e) => {
    dispatch({
      todo: e.target.value,
      type: "setTodo",
    });
  });

  const addTodo = useCallback((e) => {
    dispatch({
      todo: state.todo,
      type: "addTodo",
    });
  });
  console.log("todo working");
  return (
    <>
      <TodoAdd addTodo={addTodo} setTodo={setTodo} todo={state.todo} />
      <Todos todos={state.todos} />
    </>
  );
};

export default memo(TodoApp);
