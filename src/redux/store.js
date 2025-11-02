import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import addToCartReducer from "./addToCartSlice";
import addToCompareReducer from "./compareSlice"
import addToFavoriteReducer from "./favoriteSlice"
import activeCardReducer from "./activeCardSlice";
import searchReducer from "./searchSlice";



// persist configs
const cartPersistConfig = { key: "cart", storage, whitelist: ["items"] };
const comparePersistConfig = { key: "compare", storage, whitelist: ["items"] };
const favoritePersistConfig = { key: "favorite", storage, whitelist: ["items"] };

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    addToCart: persistReducer(cartPersistConfig, addToCartReducer),
    addToCompare: persistReducer(comparePersistConfig, addToCompareReducer),
    addToFavorite: persistReducer(favoritePersistConfig, addToFavoriteReducer),
    activeCard: activeCardReducer,
    search:searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
