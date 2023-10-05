import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";

const initialState = {
  productList: products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) => {
      payload.id =
        Math.floor(Math.random() * (10000000 - 10000)) +
        payload.title.replaceAll(" ", "");
      payload.amount = 1;
      state.productList = [...state.productList, payload];
      console.log(state.productList);
    },
  },
});

export const { addNewProduct } = productSlice.actions;

export default productSlice.reducer;
