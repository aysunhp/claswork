import { RootState } from "../redux/store/store";
import { setTodo, setTodos } from "../redux/slice/TodoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddTodo = () => {
  const todo = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        value={todo.title}
        placeholder="Enter new todo"
        onChange={(e) => {
          dispatch(setTodo(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(setTodos());
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;
