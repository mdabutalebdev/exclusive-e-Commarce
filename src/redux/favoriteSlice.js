import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (!existing) {
        state.items.push(product);
      }
    },
    removeFromFavorite: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearFavorite: (state) => {
      state.items = [];
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
