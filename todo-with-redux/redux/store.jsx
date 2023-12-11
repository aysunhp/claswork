import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/TodoSlices";
import pizzaReducer from "./slices/PizzaSlices";
import productReducer from "./slices/Products";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    pizza: pizzaReducer,
    product: productReducer,
  },
});
