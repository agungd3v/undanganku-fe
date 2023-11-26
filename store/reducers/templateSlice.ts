import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../index";
import { HYDRATE } from "next-redux-wrapper";

export interface TemplateState {
  templateUsed: number;
  templateOpen: boolean;
}

const initialState: TemplateState = {
  templateUsed: 0,
  templateOpen: false
}

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplateUsed(state, action) {
      state.templateUsed = action.payload;
    },
    setTemplateOpen(state, action) {
      state.templateOpen = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {...state, ...action.payload.template}
    }
  }
});

export const { setTemplateUsed, setTemplateOpen } = templateSlice.actions;
export const selectTemplateUsed = (state: AppState) => state.template.templateUsed;
export const selectTemplateOpen = (state: AppState) => state.template.templateOpen;

export default templateSlice.reducer;