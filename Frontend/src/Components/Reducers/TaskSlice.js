import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "main",
  initialState: {
    tasks: [],
  },
  reducers: {
    initialTasks: (state, action) => {
      state.tasks = action.payload;
    },
    storeTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      state.tasks.forEach((task) => {
        if (task.id === action.payload) task = action.payload;
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { initialTasks, storeTask, deleteTask, updateTask } = slice.actions;
export const tasksSelector = (state) => state.taskStorage.tasks;

export default slice.reducer;
