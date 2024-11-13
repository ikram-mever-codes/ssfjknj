import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import propertyManagerReducer from "./features/pmSlice";
const store = configureStore({
  reducer: {
    propertyManagerReducer: propertyManagerReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
