import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialTasks, tasksSelector } from "../Reducers/TaskSlice";
import { updateTask } from "../Reducers/TaskSlice";
import { setSelected } from "../Reducers/SelectedSlice";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import api from "../../Api/api";

export default function useTaskContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const toDos = useSelector(tasksSelector);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  const [tasks, setTasks] = useState(toDos);

  useEffect(() => {
    api
      .get("/todos")
      .then(function (response) {
        dispatch(initialTasks(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);

  useEffect(() => {
    setTasks(toDos);
  }, [toDos]);

  const formatDateTime = (dateTime) => {
    const formatedDateTime = `${dateTime.substring(0, 10)}`;
    return formatedDateTime;
  };

  const toggleCompleted = async (taskId, currentState) => {
    const toggle = !currentState;
    await api
      .put("/todos", { id: taskId, completed: toggle })
      .then((response) => {
        dispatch(updateTask(response.data));
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

  const filterTasksByDate = (date, dateString) => {
    date === null
      ? setTasks(toDos)
      : setTasks(toDos.filter((toDo) => formatDateTime(toDo.created) === dateString));
  };
  const selectTask = (task) => {
    dispatch(setSelected(task));
  };
  const goToAddNewTask = () => {
    dispatch(setSelected({}));
    history.push("/new");
  };

  return {
    selectTask,
    tasks,
    formatDateTime,
    toggleCompleted,
    filterTasksByDate,
    goToAddNewTask,
    isTabletOrMobile,
  };
}
