import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ToDoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [todo, setToDo] = useState();
  const [isEditing, setIsEditing] = useState(id === "new");

  useEffect(() => {
    getToDo();
  }, [id]);

  const getToDo = async () => {
    try {
      const response = await fetch(`/api/todo/todo/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setToDo(data);
      } else {
        console.error("Filed to tetch the ToDo.");
      }
    } catch (error) {
      console.error("Error fetching the ToDo: ", error);
    }
  };

  const handleChange = (e, filename) => {
    setIsEditing(true);
    const { value } = e.target;
    const updated = todo?.updated;
    const created = todo?.updated;
  };
  return <div></div>;
};

export default ToDoPage;
