import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';

export const store = configureStore({
  reducer: {
    products: productReducer,   // <-- use this key in useSelector
    categories: categoryReducer // <-- use this key in useSelector
  },
});
