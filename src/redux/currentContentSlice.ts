import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrentContentOptions {
  value: "home" | "about" | "resume" | "projects";
  selectedProject: string | null;
}

const initialState: CurrentContentOptions = { value: "home", selectedProject: null };

const currentContentSlice = createSlice({
  name: "currentContent",
  initialState,
  reducers: {
    changeContent: (state, action: PayloadAction<CurrentContentOptions>) => {
      state.value = action.payload.value;
      state.selectedProject = action.payload.selectedProject;
    },
    selectProject: (state, action: PayloadAction<CurrentContentOptions>) => {
      state.selectedProject = action.payload.selectedProject;
    },
  },
});

export const { changeContent, selectProject } = currentContentSlice.actions;

export default currentContentSlice.reducer;
