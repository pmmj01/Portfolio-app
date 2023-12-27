import React from "react";

const TaskDetailsModal = ({
  task,
  onClose,
  onUpdateCompleted,
  onUpdateArchived,
}) => {
  const handleClose = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleClickCompleted = () => {
    const newCompletedStatus = !task.completed;
    onUpdateCompleted(task.id, newCompletedStatus);
  };

  const handleClickArchived = () => {
    const newArchivedStatus = !task.archived;
    onUpdateArchived(task.id, newArchivedStatus);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h1>{task.description}</h1>
        <div className="button-container">
          <div className="slider-container-completed" data-info={task.completed
                ? "Completed✅"
                : "Completed❌"}
                >
            <input
              type="checkbox"
              className="checkbox"
              id={`completed-${task.id}`}
              checked={task.completed}
              onChange={handleClickCompleted}
            />
            <label className="switch" htmlFor={`completed-${task.id}`}>
              <span className="slider"></span>
            </label>
          </div>
          <div className="slider-container-archived" data-info={task.archived ? "Archived\u2705" : "Archived\u274c"}>
            <input
              type="checkbox"
              className={`checkbox ${task.archived ? "archived-checkbox" : ""}`}
              id={`archived-${task.id}`}
              checked={task.archived}
              onChange={handleClickArchived}
              disabled={task.archived}
            />
            <label className="switch" htmlFor={`archived-${task.id}`}>
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <button onClick={handleClose}> X </button>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
