import React, { useState, useEffect } from "react";
import ListItem from "../../components/ToDo/ListItem";
import TaskDetailsModal from "../../components/ToDo/TaskDetailsModal";
import TaskCreate from "../../components/ToDo/TaskCreate";

const ToDoListPage = () => {
  const [toDoList, setToDoList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [addTask, setAddTask] = useState(null);

  useEffect(() => {
    // console.log("Initial selectedTask value:", selectedTask);
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

  const handleAddTaskClick = (toDo) => {
    setAddTask(toDo);
  };

  const handleCloseTaskModal = () => {
    setAddTask(null);
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

  const updateAddStatus = async (newTask) => {
    try {
      const response = await fetch(`/api/todo/todo/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      if (response.ok) {
        const data = await response.json();
        setToDoList((prevToDo) => [data, ...prevToDo]);
      } else {
        console.error("ToDoListPage... Filed to create the task");
      }
    } catch (error) {
      console.error("Error creating the task: ", error);
    }
  };

  return (
    <div>
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
      <div>
        <button className="floating-button" onClick={handleAddTaskClick}>+</button>
        {addTask && (
          <TaskCreate
            onCloseTask={handleCloseTaskModal}
            onCreateTask={updateAddStatus}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoListPage;
