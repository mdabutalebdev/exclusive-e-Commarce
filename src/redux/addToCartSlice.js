// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // cart items
};

const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1; // একই product থাকলে quantity বাড়াও
      } else {
        state.items.push({ ...product, quantity: 1 }); // নতুন product add করো
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        if (existing.quantity > 1) existing.quantity -= 1;
        else state.items = state.items.filter((item) => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
