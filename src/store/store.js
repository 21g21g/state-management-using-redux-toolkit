import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./statemana";

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
  },
});

export default store;
