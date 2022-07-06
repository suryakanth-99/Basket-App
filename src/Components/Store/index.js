import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./UiSlic";
import cartSlice from "./CartSlice";
const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;
