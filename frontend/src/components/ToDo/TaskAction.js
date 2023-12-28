import React from "react";

const TaskAction = ({ actionType, onClick }) => {
  const handleAction = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleAction}>
      {actionType === "DELETE" ? "Delete" : "Save"}
    </button>
  );
};

export default TaskAction;
