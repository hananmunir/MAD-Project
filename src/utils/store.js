import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../Features/ListSlice";
import userReducer from "../Features/UserSlice";
export const store = configureStore({
  reducer: {
    list: listReducer,
    user: userReducer,
  },
});
