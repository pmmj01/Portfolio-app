import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`${note.id}`}>
        <div className="notes-list-item">
          <h3>{note.title || <u className="empty-block">Brak tytułu</u>}</h3>
          <h5>{note.body.length > 50 ? note.body.slice(0,50) + "..." : note.body || <u className="empty-block">Brak notatki</u>}</h5>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
