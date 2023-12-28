import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotesBox = () => {
  const [notes, setNotes] = useState([]);
  const location = useLocation([]);
  const [isHovered, setIsHovered] = useState(false);

  const isOnNotesPage = location.pathname === "/notes/";

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
    getNotes();
  }, [isOnNotesPage]);

  const getNotes = async () => {
    const response = await fetch("/api/notes/notes/");
    const data = await response.json();
    setNotes(data);
  };

  const commonHeader = (
    <header className="notes-header">
      <h2
        className={`notes-title ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        {isOnNotesPage ? (
          "Notes"
        ) : (
          <>
            <span className="back-emoji first-arrow" />
            Notes
            <span className="back-emoji second-arrow" />
          </>
        )}
      </h2>
      <p className="notes-count">{notes?.length || 0}</p>
    </header>
  );

  return (
    <div>
      {isOnNotesPage ? commonHeader : <Link to="/notes/">{commonHeader}</Link>}
      {isOnNotesPage ? (
        <Link to="/notes/new/" className="floating-button">
          +
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default NotesBox;
