import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios("https://northwind.vercel.app/api/suppliers/");
  return response.data;
});

const initialState = {
  products: [],
};

export const productSlices = createSlice({
  name: "product",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addIngridient, toggleGluten, deleteIngridient } =
  productSlices.actions;

export default productSlices.reducer;
