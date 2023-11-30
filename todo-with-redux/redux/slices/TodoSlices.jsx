import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

export const todoSlices = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      let obj = {
        id: uuidv4(),
        tittle: action.payload,
      };

      state.todos.push(obj);
    },
  },
});

export const { addTodo } = todoSlices.actions;

export default todoSlices.reducer;
