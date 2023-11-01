import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchReducer";
import userReducer from "./slices/userReducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
