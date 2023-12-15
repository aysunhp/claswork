import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export interface Todo {
  id: string;
  title: string;
}

export interface TodoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: TodoState = {
  todo: {
    id: "",
    title: "",
  },
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Todo>) => {
      let obj: Todo = {
        id: uuidv4(),
        title: action.payload,
      };

      state.todo = obj;
    },

    setTodos: (state) => {
      state.todos = [...state.todos, state.todo];
      console.log(state.todos);
      state.todo = {
        id: "",
        title: "",
      };
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodo, setTodos, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
