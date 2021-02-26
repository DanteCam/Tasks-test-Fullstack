import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "selected",
  initialState: {
    selectedTask: {},
  },
  reducers: {
    setSelected: (state, action) => {
      state.selectedTask = action.payload;
    },
    toggleCompletedSelected: (state, action) => {
      state.selectedTask.completed = action.payload;
    },
  },
});
export const { setSelected, toggleCompletedSelected } = slice.actions;
export const selectedTaskSelector = (state) => state.selectedStorage.selectedTask;

export default slice.reducer;
