import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  ingridients: [],
  gluten: false,
};

export const pizzaSlices = createSlice({
  name: "pizza",
  initialState: initialState,
  reducers: {
    addIngridient: (state, action) => {
      let obj = {
        id: uuidv4(),
        tittle: action.payload,
      };

      state.ingridients.push(obj);
    },
    toggleGluten: (state) => {
      return { ...state, gluten: !state.gluten };
    },
    deleteIngridient: (state, action) => {
      let idx = state.ingridients.findIndex((x) => x.id == action.payload);
      state.ingridients.splice(idx, 1);
    },
  },
});

export const { addIngridient, toggleGluten, deleteIngridient } =
  pizzaSlices.actions;

export default pizzaSlices.reducer;
