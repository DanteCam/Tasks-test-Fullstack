import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Components/Reducers/TaskSlice";
import selectedReducer from "../Components/Reducers/SelectedSlice";

export default configureStore({
     reducer: {
          taskStorage: taskReducer,
          selectedStorage: selectedReducer,
     },
});
