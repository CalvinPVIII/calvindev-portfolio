import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentContentOptions {
  value: "home" | "about" | "resume" | "projects";
}

const initialState: CurrentContentOptions = { value: "home" };

const currentContentSlice = createSlice({
  name: "currentContent",
  initialState,
  reducers: {
    changeContent: (state, action: PayloadAction<CurrentContentOptions>) => {
      state.value = action.payload.value;
    },
  },
});

export const { changeContent } = currentContentSlice.actions;

export default currentContentSlice.reducer;
