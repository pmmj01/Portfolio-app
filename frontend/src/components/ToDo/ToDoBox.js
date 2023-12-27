import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ToDoBox = () => {
  const [task, setTask] = useState([]);
  const location = useLocation([]);

  const isOnToDoPage = location.pathname === "/todo/";

  useEffect(() => {
    getToDos();
  }, [isOnToDoPage]);

  const getToDos = async () => {
    const response = await fetch("/api/todo/todo/");
    const data = await response.json();
    setTask(data);
  };

  const commonHeader = (
    <header className="todo-header">
      <h2 className="todo-title">ToDo</h2>
      <p className="todo-count">{task?.length || 0}</p>
    </header>
  );

  return (
    <div>
      {isOnToDoPage ? commonHeader : <Link to="/todo/">{commonHeader}</Link>}
      {isOnToDoPage ? (
        <Link to="/todo/new/" className="floating-button">
          +
        </Link>
      ) : (
        "null"
      )}
    </div>
  );
};

export default ToDoBox;
