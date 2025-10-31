import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity = product.quantity; // update quantity
      } else {
        state.items.push({ ...product }); // push quantity included
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) existing.quantity = quantity;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
