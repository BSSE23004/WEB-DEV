import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
export const store = configureStore({
  reducer: {
    // The counter reducer is imported from the counterSlice file and added to the store
    counter: counterReducer,
  },
});
