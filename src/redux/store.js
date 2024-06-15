// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { thunk } from "redux-thunk";
// reducers
import appSlice from "./reducers/appSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, appSlice);

export const store = configureStore({
  reducer: { app: persistedReducer },
  devTools: process.env.NODE_ENV !== "production",
  middleware: () => {
    return [thunk];
  },
});

export const persistor = persistStore(store);
