import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",

  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
