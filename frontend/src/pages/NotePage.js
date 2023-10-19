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
    <div className="note-data">
      <h2>{note?.title}</h2>
      <h4>{note?.body}</h4>
    </div>
  );
};

export default NotePage;
