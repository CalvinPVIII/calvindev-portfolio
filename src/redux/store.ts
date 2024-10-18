import { configureStore } from "@reduxjs/toolkit";
import currentContentReducer from "./currentContentSlice";
export default configureStore({
  reducer: currentContentReducer,
});
