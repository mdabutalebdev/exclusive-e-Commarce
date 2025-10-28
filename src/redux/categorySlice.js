import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const CategoryFetch = createAsyncThunk("categories/fetch", async () => {
  const res = await fetch("/categorys.json");
  return await res.json();
});

const categorySlice = createSlice({
  name: "categories",
  initialState: { items: [], loading: false, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CategoryFetch.pending, (state) => {
        state.loading = true;
        state.items = [];
      })
      .addCase(CategoryFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(CategoryFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer; // ✅ default export
