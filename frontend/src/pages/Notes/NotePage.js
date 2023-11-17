import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LuSave } from "react-icons/lu";
import DeleteNote from "../../components/Notes/DeleteNote";
// import CreateNote from "../../components/Notes/CreateNote";
import EditNote from "../../components/Notes/EditNote";
import { CreateNoteButton } from "../../components/Notes/CreateNote";

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState();
  const [isEditing, setIsEditing] = useState(id === "new");

  useEffect(() => {
    if (id !== "new") getNote();
    else setNote({ title: "", body: "" });
  }, [id]);

  const getNote = async () => {
    const response = await fetch(`/api/notes/notes/${id}/`);
    const data = await response.json();
    setNote(data);
  };

  const handleUpdateNote = async () => {
    try {
      await EditNote(id, {
        title: note.title,
        body: note.body,
      });
      navigate(`/notes/`);
      console.log("Update completed");
      console.log(id);
    } catch (error) {
      console.error("Filed to delete the note: ", error);
    }
  };

  // const handleCreateNote = async () => {
  //   try {
  //     await CreateNote(note, navigate);
  //     navigate(`/notes/`);
  //     // window.location.reload();
  //     console.log("Note created");
  //   } catch (error) {
  //     console.error("Filed to delete the note: ", error);
  //   }
  // };

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
      await CreateNoteButton(note.id);
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
        <div>
          <h4>{note?.title}</h4>
        </div>
        <div>
          <button
            onClick={
              isEditing ? handleUpdateNote : () => setIsEditing(!isEditing)
            }
          >
            {id !== "new" && isEditing ? "Save" : "" }
          </button>
        </div>
        <td>
          <tr>
            {id !== "new" ? (
              <button onClick={handleDeleteNote}>Delete</button>
            ) : (
              <CreateNoteButton note={note} navigate={navigate} />
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