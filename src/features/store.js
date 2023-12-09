import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./food/foodSlice";

const store = configureStore({
  reducer: {
    food: foodReducer,
  },
});

export default store;
