import { createAsyncThunk, createSlice } from  "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("/productData.json");
    return await response.json();
  
    
});

 export const ProductSlice = createSlice({
    name: "products",
    initialState: {
        items: null,
        loading: true,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true;
            state.items = null;
        })
          .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload;
        })
         .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})