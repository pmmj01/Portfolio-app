import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  const formattedDate = () => {
    const date = new Date(note.updated);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
  };

  function capitalizeFirstLetter(text) {
    if (text && typeof text === "string" && text.length > 0) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return text;
  }

  return (
    <div>
      <Link to={`${note.id}`}>
        <div className="notes-list-item">
          <div className="title-and-date">
            <div className="note-header">
              {note?.title && note.title.length > 30
                ? capitalizeFirstLetter(note.title.slice(0, 30)) + "..."
                : capitalizeFirstLetter(note.title) || (
                    <u className="empty-block">Brak tytułu</u>
                  )}
            </div>
            <div className="note-datetime">{formattedDate()}</div>
          </div>
          <div className="note">
            {note?.body && note.body.length > 50
              ? capitalizeFirstLetter(note.body.slice(0, 50)) + "..."
              : capitalizeFirstLetter(note.body) || (
                  <u className="empty-block">Brak notatki</u>
                )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
