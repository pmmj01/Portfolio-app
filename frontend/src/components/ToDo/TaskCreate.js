import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TaskCreate = ({ onCloseTask, onCreateTask }) => {
  const [todo, setTodo] = useState({ description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleAddTask = async () => {
    try {
      await onCreateTask(todo);
      onCloseTask();
    } catch (error) {
      console.error("Error creating the task: ", error);
    }
  };

  const handleClose = () => {
    onCloseTask();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onCloseTask();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>Create New Task</h2>
        <div className="todo-textarea">
          <div className="content">
            <textarea
              type="text"
              id="description"
              name="description"
              value={todo.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {todo.description ? (
          <button className="add-button" onClick={handleAddTask}>
            <FaPlus className="plus-icon" />
          </button>
        ) : (
          <div className="create-info">Enter text to save the task</div>
        )}
        <button className="close-button" onClick={handleClose}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default TaskCreate;
