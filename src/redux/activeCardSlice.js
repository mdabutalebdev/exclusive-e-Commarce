import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCardId: null,
};

const activeCardSlice = createSlice({
  name: "activeCard",
  initialState,
  reducers: {
    setActiveCard: (state, action) => {
      state.activeCardId = action.payload;
    },
    clearActiveCard: (state) => {
      state.activeCardId = null;
    },
  },
});

export const { setActiveCard, clearActiveCard } = activeCardSlice.actions;
export default activeCardSlice.reducer;
