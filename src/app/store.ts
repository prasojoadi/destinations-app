import { bookmarkAPI } from "@/features/bookmark/bookmarkAPI";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [bookmarkAPI.reducerPath]: bookmarkAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookmarkAPI.middleware),
});