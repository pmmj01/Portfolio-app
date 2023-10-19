import React, { useState, useEffect } from "react";

const NotesBox = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => { 
    const response = await fetch("/api/notes/notes/");
    const data = await response.json();
    setNotes(data)
  };

  return (
    <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title">&#9782; Notes</h2>
          <p className="notes-count">{notes?.length || 0}</p>
        </div>
    </div>
  );
};

export default NotesBox;
