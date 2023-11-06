import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LuSave } from "react-icons/lu";
import DeleteNote from "../../components/Notes/DeleteNote";
import CreateNote from "../../components/Notes/CreateNote";
import AddNote from "../../components/Notes/AddNote";

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [isEditing, setIsEditing] = useState(id === "new");

  useEffect(() => {
    if (id !== "new") getNote();
  }, [id]);

  const getNote = async () => {
    const response = await fetch(`/api/notes/notes/${id}/`);
    const data = await response.json();
    setNote(data);
  };

  const handleUpdateNote = async () => {
    try {
      await AddNote(id, note);
      navigate(`/notes/`);
      console.log("Update completed");
    } catch (error) {
      console.error("Filed to delete the note: ", error);
    }
  };

  const handleCreateNote = async () => {
    try {
      await CreateNote(note, navigate);
      navigate(`/notes/`);
      // window.location.reload();
      console.log("Note created");
    } catch (error) {
      console.error("Filed to delete the note: ", error);
    }
  };

  const handleDeleteNote = async () => {
    try {
      await DeleteNote(id);
      navigate(`/notes/`);
      // window.location.reload();
      console.log("Note deleted");
    } catch (error) {
      console.error("Filed to delete the note: ", error);
    }
  };


  const handleSubmit = async () => {
    if ((id !== "new" && (!note || note.title === "")) || note.body === "") {
      await handleDeleteNote();
    } else if (id !== "new") {
      await handleUpdateNote();
    } else if (id === "new" && note.body !== null) {
      await handleCreateNote();
    }
    await getNote();
    navigate(`/notes/`);
  };

  const handleChange = (e, fieldName) => {
    setIsEditing(true);
    const { value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [fieldName]: value,
    }));
    console.log(fieldName, value);
  };

  return (
    <div className="notes-list-item">
      <div className="note-header">
        <h4>{note?.title}</h4>
        <td>
          <tr>
            <button
              onClick={isEditing ? handleUpdateNote : () => setIsEditing(!isEditing)}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </tr>
          <tr>
            <button>
              <LuSave className="custom-icon" onClick={handleSubmit} />
            </button>
          </tr>
          <tr>
            {id !== "new" ? (
              <button onClick={handleDeleteNote}>Delete</button>
            ) : (
              <button onClick={handleCreateNote}>Done</button>
            )}
          </tr>
        </td>
      </div>
      <div className="note">
        <div>
          <textarea
            className="notes-title-input"
            name="title"
            placeholder="Title"
            value={note?.title || ""}
            onChange={(e) => handleChange(e, "title")}
          />
        </div>
        <div>
          <textarea
            name="body"
            placeholder="Notes"
            value={note?.body}
            onChange={(e) => handleChange(e, "body")}
          />
        </div>
      </div>
    </div>
  );
};

export default NotePage;
