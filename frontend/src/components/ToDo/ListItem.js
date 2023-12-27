import React from "react";

const ListItem = ({ todo, onClick }) => {
  const handleClick = () => {
    onClick(todo);
  };

  const descriptionStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.archived ? "grey" : "",
  };

  return (
    <div className="todos-list-item">
      <div
        className="todo-header"
        onClick={handleClick}
        style={descriptionStyle}
      >
        {todo?.description}
        {todo.archived && <span style={{ float: "right" }}>Archived</span>}
      </div>
      <div className="container-status">
        <div className="container-completed" data-info="Completed">
          {todo.completed ? "✅ Completed" : "❌ Not Completed"}
        </div>
        <div className="container-archived" data-info="Archived">
          {todo.archived ? "✅ Archived" : "❌ Not Archived"}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
