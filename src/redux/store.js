import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import addToCartReducer from './addToCartSlice';
import favoriteReducer from "./favoriteSlice";
import compareReducer from "./compareSlice";


export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    addToCart: addToCartReducer,
    favorite: favoriteReducer,
    compare: compareReducer,
  },
});
