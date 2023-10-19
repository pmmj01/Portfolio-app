import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

const NotesListPages = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("/api/notes/notes/");
    const data = await response.json();
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPages;
