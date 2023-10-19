import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LuSave } from "react-icons/lu";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    const response = await fetch(`/api/notes/notes/${id}/`);
    const data = await response.json();
    setNote(data);
  };

  const updateNote = async () => {
    fetch(`/api/notes/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    updateNote();
    navigate(`/notes/`);
  };

  return (
    <div className="notes-list-item">
      <div className="note-header" onClick={handleSubmit}>
      <h4>{note?.title}</h4>
        <button>
          <LuSave className="custom-icon" />
        </button>
      </div>
      <div className="note">
        <textarea
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          defaultValue={note?.body}
        />
      </div>
    </div>
  );
};

export default NotePage;
