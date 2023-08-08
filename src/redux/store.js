import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReduser from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReduser,
  },
});

export default store;
