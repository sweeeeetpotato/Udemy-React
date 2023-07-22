import { configureStore } from "@reduxjs/toolkit";
import lectureReducer from "./slice/lectureInfoSlice";

export const store = configureStore({
  reducer: {
    lecture: lectureReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
