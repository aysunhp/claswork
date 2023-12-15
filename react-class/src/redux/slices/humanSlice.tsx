import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HumanState {
  name: string;
  surname: string;
  age: number;
  salary: number;
  GPA: number;
  groupName: string;
  hobbies: string[];
  skills: string[];
  position: string;
}

const initialState: HumanState = {
  name: "",
  surname: "",
  age: 0,
  salary: 0,
  GPA: 0,
  groupName: "",
  hobbies: [],
  skills: [],
  position: "",
};

export const humanSlice = createSlice({
  name: "human",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = humanSlice.actions;

export default humanSlice.reducer;
