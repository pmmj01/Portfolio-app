import React, { useState, useEffect } from "react";
import ListItem from "../../components/ToDo/ListItem";
import TaskDetailsModal from "../../components/ToDo/TaskDetailsModal";

const ToDoListPage = () => {
  const [toDoList, setToDoList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    getEToDo();
  }, []);

  const getEToDo = async () => {
    try {
      const response = await fetch("/api/todo/todo/");
      if (!response.ok) {
        throw new Error("Connection error");
      }
      const data = await response.json();
      setToDoList(data);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    }
  };

  const handleTaskClick = (toDo) => {
    setSelectedTask(toDo);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const updateCompletedStatus = async (taskId, completed) => {
    try {
      const response = await fetch(`/api/todo/todo/${taskId}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed }),
      });
      if (response.ok) {
        setToDoList((prevToDo) => {
          const updatedToDoList = prevToDo.map((item) => {
            if (item.id === taskId) {
              return {
                ...item,
                completed,
              };
            }
            return item;
          });
          return updatedToDoList;
        });
        setSelectedTask((prevSelectedTask) => {
          if (prevSelectedTask && prevSelectedTask.id === taskId) {
            return {
              ...prevSelectedTask,
              completed,
            };
          }
          return prevSelectedTask;
        });
      }
    } catch (error) {
      console.error("Error while updating completed:", error);
    }
  };

  const updateArchivedStatus = async (taskId, archived) => {
    try {
      const response = await fetch(`/api/todo/todo/${taskId}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ archived }),
      });
      console.log(response, fetch);
      if (response.ok) {
        setToDoList((prevToDo) => {
          const updatedToDoList = prevToDo.map((item) => {
            if (item.id === taskId) {
              return {
                ...item,
                archived,
              };
            }
            return item;
          });
          return updatedToDoList;
        });
        setSelectedTask((prevSelectedTask) => {
          if (prevSelectedTask && prevSelectedTask.id === taskId) {
            return {
              ...prevSelectedTask,
              archived,
            };
          }
          return prevSelectedTask;
        });
      }
    } catch (error) {
      console.error("Error while updating archived:", error);
    }
  };

  return (
    <div className="todo">
      <div className="todo-list">
        {Array.isArray(toDoList) &&
          toDoList.map((toDoList, index) => (
            <ListItem
              key={index}
              todo={toDoList}
              onClick={handleTaskClick}
              onUpdateCompleted={updateCompletedStatus}
              onUpdateArchived={updateArchivedStatus}
            />
          ))}
      </div>
      {selectedTask && (
        <TaskDetailsModal
          task={selectedTask}
          onClose={handleCloseModal}
          onUpdateCompleted={updateCompletedStatus}
          onUpdateArchived={updateArchivedStatus}
        />
      )}
    </div>
  );
};

export default ToDoListPage;
