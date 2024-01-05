import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ToDoBox = () => {
  const [task, setTask] = useState([]);
  const location = useLocation([]);
  const [isHovered, setIsHovered] = useState(false);

  const isOnToDoPage = location.pathname === "/todo/";

  let timeoutId;

  const handleHover = () => {
    clearTimeout(timeoutId);
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(false);
    }, 800);
  };

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
      <h2
        className={`todo-title ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        {isOnToDoPage ? (
          "ToDo"
        ) : (
          <>
            <span className="back-emoji first-arrow" />
            ToDo
            <span className="back-emoji second-arrow" />
          </>
        )}
      </h2>
      <p className="todo-count">{task?.length || 0}</p>
    </header>
  );

  return (
    <div>
      {isOnToDoPage ? commonHeader : <Link to="/todo/">{commonHeader}</Link>}
      {/* {isOnToDoPage ? (
        <button className="floating-button">
          +
        </button>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default ToDoBox;
