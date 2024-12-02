import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../index.css";

const ToDoList = () => {
  const [task, setTask] = useState(["kain", "laba"]);
  const [newTask, setNewTask] = useState("");


  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((task) => [...task, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    if (index < task.length-1) {
        const updatedTasks = [...task];
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
        setTask(updatedTasks);
      }
  }

  return (
    <>
      <div className="to-do-list">
        <Form>
          <Form.Label className="lbl-to-do-list"> To-Do List</Form.Label>
          <Form.Group>
            <div className="txt-add-btn">
              <Form.Control
                type="text"
                placeholder="Enter a Task"
                value={newTask}
                onChange={handleInputChange}
              />
              <Button variant="primary" className="add-btn" onClick={addTask}>
                Add
              </Button>
            </div>
          </Form.Group>

          <ul>
            {task.map((task, index) => (
              <li key={index} className="lbl-task-btn">
                <Form.Label className="task-lbl"> {task}</Form.Label>

                <Button
                  size="sm"
                  variant="danger"
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </Button>

                <Button
                  size="sm"
                  variant="outline-success"
                  className="up-btn"
                  onClick={() => moveTaskUp(index)}
                >
                  👆
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className="down-btn"
                  onClick={() => moveTaskDown(index)}
                >
                  👇
                </Button>
              </li>
            ))}
          </ul>
        </Form>
      </div>
    </>
  );
};

export default ToDoList;
