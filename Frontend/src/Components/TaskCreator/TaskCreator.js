import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Modal, Button } from "antd";
import useTaskCreator from "./useTaskCreator";
import React from "react";

export default function TaskCreator() {
  const { register, handleSubmit, errors } = useForm();
  const { errorLabel, onSubmit, taskToEdit, cancelTaskCreation } = useTaskCreator();

  return (
    <Modal footer={null} onCancel={cancelTaskCreation} title="New Task" visible={true}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            defaultValue={taskToEdit.title}
            ref={register({ required: true, maxLength: 250 })}
            name="title"
            type="title"
            // placeholder="Title of the task"
          />
          {errors.title && errorLabel(errors.title.type)}
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            defaultValue={taskToEdit.description}
            ref={register({ required: true, maxLength: 250 })}
            name="description"
            as="textarea"
            // placeholder="Description of the task"
            rows={4}
          />
          {errors.description && errorLabel(errors.description.type)}
        </Form.Group>
        <Form.Group>
          <Button className="mr-2" variant="light" onClick={cancelTaskCreation}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    </Modal>
  );
}
