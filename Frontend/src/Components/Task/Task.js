import { Row, Container } from "react-bootstrap";
import { Drawer, Select, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useTask from "./useTask";
import React from "react";

const { Option } = Select;

export default function Task() {
  const {
    formatDate,
    formatTime,
    toggleCompleted,
    editTask,
    task,
    closeDrawer,
    eraseTask,
  } = useTask();

  return (
    <React.Fragment>
      <Drawer height={256} onClose={closeDrawer} placement="right" closable={true} visible={true}>
        <Container className="ml-1">
          <Row>
            <h3 className="mt-5 font-weight-bold">{task.title}</h3>
          </Row>
          <Row>
            <Select
              onChange={() => toggleCompleted(task.id, task.completed)}
              defaultValue={task.completed ? "Status: completed" : "Status: pending"}
            >
              <Option value="Status: pending">Status: pending</Option>
              <Option value="Status: completed">Status: completed</Option>
            </Select>
          </Row>
          <Row className="mt-3">
            <p>
              <strong>Created</strong>
            </p>
          </Row>
          <Row>
            <p>{formatDate(task.created)}</p>
          </Row>
          <Row className="mt-3">
            <p>
              <strong>Description</strong>
            </p>
          </Row>
          <Row>
            <p>{task.description}</p>
            <p>Created at: {formatTime(task.created)}</p>
            <p>By: John Smith</p>
          </Row>
        </Container>
        <Container className="d-flex flex-column-reverse mt-5">
          <Row>
            <Button onClick={editTask} className="mr-2 font-weight-bold" type="text">
              <EditOutlined />
              Edit
            </Button>
            <Button onClick={() => eraseTask(task.id)} className="font-weight-bold" type="text">
              <DeleteOutlined />
              Delete
            </Button>
          </Row>
        </Container>
      </Drawer>
    </React.Fragment>
  );
}
