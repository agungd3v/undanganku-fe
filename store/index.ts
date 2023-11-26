import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { templateSlice } from "./reducers/templateSlice";

const makeStore = () => configureStore({
	reducer: {
    [templateSlice.name]: templateSlice.reducer
  },
	devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const reduxWrapper = createWrapper<AppStore>(makeStore);