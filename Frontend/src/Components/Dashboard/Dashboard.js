import TaskContainer from "../TaskContainer/TaskContainer";
import Task from "../Task/Task";
import TaskCreator from "../TaskCreator/TaskCreator";
import { Container } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import { selectedTaskSelector } from "../Reducers/SelectedSlice";
import { useSelector } from "react-redux";
import React from "react";

export default function Dashboard() {
  const isATaskStored = useSelector(selectedTaskSelector).id ? true : false;
  return (
    <Container className="h-100  bg-light" fluid>
      <Container className="py-4">
        <h2 className="font-weight-bold">My Tasks</h2>
      </Container>
      <Route path={["/home", "/"]} component={TaskContainer} />
      <Route
        path="/view/:id"
        render={() => {
          return isATaskStored ? <Task /> : <Redirect to="/home" />;
        }}
      />
      <Route path={["/edit/:id", "/new"]} component={TaskCreator} />
    </Container>
  );
}
