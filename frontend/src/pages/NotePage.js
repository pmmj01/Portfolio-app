import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`/api/notes/notes/${id}/`);
      const data = await response.json();
      setNote(data);
    };
    getNote();
  }, [id]);

  return (
    <div className="notes-list-item">
      <span>{note?.title}</span>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotePage;
