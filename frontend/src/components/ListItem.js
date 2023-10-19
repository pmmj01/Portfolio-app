import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`${note.id}`}>
        <div className="notes-list-item">
          <span>{note.title || <u className="empty-block">Brak tytułu</u>}</span>
          <p>{note.body.length > 50 ? note.body.slice(0,50) + "..." : note.body || <u className="empty-block">Brak notatki</u>}</p>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
