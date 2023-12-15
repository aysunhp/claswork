import { RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../redux/slice/TodoSlice";
import { deleteTodo } from "../redux/slice/TodoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos &&
          todos.map((todo: Todo) => {
            return (
              <li key={todo.id}>
                {todo.title}{" "}
                <button
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Todos;
