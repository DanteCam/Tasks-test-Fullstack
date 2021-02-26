import { Link } from "react-router-dom";
import React from "react";
import useTaskContainer from "./useTaskContainer";
import { Container, Table } from "react-bootstrap";
import { DatePicker, Button, Divider } from "antd";
import { PlusCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function TaskContainer() {
  const {
    tasks,
    formatDateTime,
    toggleCompleted,
    filterTasksByDate,
    selectTask,
    goToAddNewTask,
    isTabletOrMobile,
  } = useTaskContainer();

  return (
    <Container className="h-75 overflow-auto  p-0  bg-white">
      <Table>
        <thead>
          <tr>
            <th scope="col">
              <div className="ml-4 mt-2 ">
                <h5 className='font-weight-bold"'>Tasks</h5>
              </div>
            </th>

            <th colSpan="3" scope="col ">
              <div className="d-flex flex-row-reverse">
                <Button onClick={goToAddNewTask} type="link">
                  <PlusCircleOutlined />
                  Add New
                </Button>
                <Divider type="vertical" />
                <DatePicker
                  onChange={(date, dateString) => filterTasksByDate(date, dateString)}
                  placeholder="Filter by Date"
                />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ fontWeight: "bold" }}>
            <td></td>
            <td>Title</td>
            <td>Created</td>
            {!isTabletOrMobile && <td>Description</td>}
          </tr>
          {tasks.map((task) => {
            return (
              <React.Fragment key={task.id}>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <CheckCircleOutlined
                      component={Button}
                      onClick={() => toggleCompleted(task.id, task.completed)}
                      style={task.completed ? { color: "green" } : {}}
                    />
                  </td>
                  <td>
                    <Link
                      onClick={() => selectTask(task)}
                      style={{ color: "black" }}
                      to={`/view/${task.id}`}
                    >
                      {task.title.length > 18 ? `${task.title.substring(0, 18)}...` : task.title}
                    </Link>
                  </td>
                  <td>{formatDateTime(task.created)}</td>
                  {!isTabletOrMobile && (
                    <td>
                      {task.description.length > 100
                        ? `${task.description.substring(0, 100)}...`
                        : task.description}
                    </td>
                  )}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
