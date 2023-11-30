import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/TodoSlices";
import pizzaReducer from "./slices/PizzaSlices";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    pizza: pizzaReducer,
  },
});
