import React from "react";

const CreateTask = async (todo) => {
  try {
    const response = await fetch(`/api/todo/todo/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (response.ok) {
      const createdTodo = await response.json();
    } else {
      console.error("Filed to create the task.");
    }
  } catch (error) {
    console.error("Error creating the task: ", error);
  }
};

const CreateTaskButton = ({ todo }) => {
  const handleCreateTask = async () => {
    try {
      await CreateTask(note);
    } catch (error) {
      console.error("Filed to create the task: ", error);
    }
  };

  return <button onClick={handleCreateTask}>Add</button>;
};
export default CreateTask;
