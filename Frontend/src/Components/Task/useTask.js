import { useSelector, useDispatch } from "react-redux";
import {
  selectedTaskSelector,
  toggleCompletedSelected,
  setSelected,
} from "../Reducers/SelectedSlice";
import { updateTask, initialTasks, deleteTask } from "../Reducers/TaskSlice";
import { useHistory } from "react-router-dom";
import api from "../../Api/api";

export default function useTask() {
  const dispatch = useDispatch();
  const history = useHistory();
  const task = useSelector(selectedTaskSelector);
  const idToEdit = useSelector(selectedTaskSelector).id;

  const formatDate = (dateTime) => {
    const formatedDateTime = `${dateTime.substring(0, 10)}`;
    return formatedDateTime;
  };
  const formatTime = (dateTime) => {
    const formatedDateTime = `${dateTime.substring(11, 19)}`;
    return formatedDateTime;
  };

  const editTask = () => {
    history.push(`/edit/${idToEdit}`);
  };
  const closeDrawer = () => {
    history.push(`/home`);
    dispatch(setSelected({}));
  };
  const eraseTask = async (taskId) => {
    await api
      .delete("/todos", { data: { id: taskId } })
      .then((response) => {
        dispatch(deleteTask(taskId));
      })
      .catch((e) => {
        alert(`Server Error: ${e}`);
      });
    history.push(`/home`);
  };

  const toggleCompleted = async (taskId, currentState) => {
    const toggle = !currentState;
    await api
      .put("/todos", { id: taskId, completed: toggle })
      .then((response) => {
        dispatch(updateTask(response.data));
        dispatch(toggleCompletedSelected(!task.completed));
        console.log("todo toggled");
      })
      .catch((e) => {
        alert(`Server Error: ${e}`);
      });
    await api
      .get("/todos")
      .then(function (response) {
        dispatch(initialTasks(response.data));
        console.log("todos fetched");
      })
      .catch(function (error) {
        alert(`Server Error: ${error}`);
      });
  };

  return { formatDate, formatTime, editTask, task, closeDrawer, eraseTask, toggleCompleted };
}
