import { Alert } from "react-bootstrap";
import { storeTask } from "../Reducers/TaskSlice";
import { selectedTaskSelector } from "../Reducers/SelectedSlice";
import { updateTask, initialTasks } from "../Reducers/TaskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../Api/api";

export default function useTaskCreator() {
  const history = useHistory();
  const dispatch = useDispatch();

  const errorLabel = (label) => {
    return <p style={{ marginTop: "10px", color: "red" }}>{`Error: ${label}`}</p>;
  };

  const taskToEdit = useSelector(selectedTaskSelector);

  const onSubmit = async (data) => {
    if (taskToEdit.id > 0) {
      await api
        .put("/todos", { id: taskToEdit.id, ...data })
        .then((response) => {
          dispatch(updateTask(response.data));
          console.log("updated");
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
    } else {
      await api
        .post("/todos", data)
        .then((response) => {
          dispatch(storeTask(response.data));
          console.log("inserted");
        })
        .catch((e) => {
          alert(`Server Error: ${e}`);
        });
    }
    history.push(`/home`);
  };
  const cancelTaskCreation = () => {
    history.goBack();
  };

  return { errorLabel, onSubmit, taskToEdit, cancelTaskCreation };
}
