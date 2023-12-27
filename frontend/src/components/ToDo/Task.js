import React from "react";

const Task = ({ task, onClick }) => {
  const handleClick = () => {
    onClick(task);
  };

  return (
    <div onClick={handleClick}>
      <p>{task.id} {task.description}</p>
      {/* <p>{task.updated}</p>
      <p>{task.created}</p>
      <p>{task.completed}</p>
      <p>{task.archived}</p> */}
    </div>
  );
};

export default Task;
