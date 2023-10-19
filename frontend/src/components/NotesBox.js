import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const NotesBox = () => {
  const [notes, setNotes] = useState([]);
  const location = useLocation([]);

  const isOnNotesPage = location.pathname === "/notes/";

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("/api/notes/notes/");
    const data = await response.json();
    setNotes(data);
  };

  const commonHeader = (
    <div className="notes-header">
      <h2 className="notes-title">&#9782; Notes</h2>
      <p className="notes-count">{notes?.length || 0}</p>
    </div>
  );

  return (
    <div>
      {isOnNotesPage ? commonHeader : <Link to="/notes/">{commonHeader}</Link>}
    </div>
  );
};

export default NotesBox;
