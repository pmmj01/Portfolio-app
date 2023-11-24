import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteAction from "../../components/Notes/NoteAction";
import { CreateNoteButton } from "../../components/Notes/CreateNote";

const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState();
  const [isEditing, setIsEditing] = useState(id === "new");
  const [isTitleManual, setIsTitleManual] = useState(false);

  useEffect(() => {
    if (id !== "new") getNote();
    else setNote({ title: "", body: "" });
  }, [id]);

  const getNote = async () => {
    try {
      const response = await fetch(`/api/notes/notes/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setNote(data);
      } else {
        console.error("Failed to fetch the note.");
      }
    } catch (error) {
      console.error("Error fetching the note: ", error);
    }
  };

  const handleChange = (e, fieldName) => {
    setIsEditing(true);
    const { value } = e.target;
    const updated = note?.updated;
    const created = note?.updated;

    if (fieldName === "title") {
      setIsTitleManual(value !== "");
      setNote((prevNote) => ({
        ...prevNote,
        title: value.substring(0, 20),
      }));
    } else if (fieldName === "body") {
      setNote((prevNote) => {
        let updatedTitle = prevNote.title;
        if (!updated && !created) {
          const truncatedTitle = value.substring(0, 15);
          updatedTitle = truncatedTitle;
        }

        return {
          ...prevNote,
          title: updatedTitle,
          body: value.substring(0, 200),
        };
      });
    }
  };

  const handleNoteAction = async (actionType) => {
    try {
      let response;
      if (actionType === "DELETE") {
        response = await fetch(`/api/notes/notes/${id}/`, {
          method: "DELETE",
        });
      } else {
        response = await fetch(`/api/notes/notes/${id}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(note),
        });
      }

      if (response.ok) {
        if (actionType === "DELETE") {
          navigate(`/notes/`);
        } else {
          const updatedNote = await response.json();
          setNote(updatedNote);
          navigate(`/notes/`);
        }
      } else {
        console.error(
          `Failed to ${actionType === "DELETE" ? "delete" : "update"} the note.`
        );
      }
    } catch (error) {
      console.error(
        `Failed to ${actionType === "DELETE" ? "delete" : "update"} the note: `,
        error
      );
    }
  };

  return (
    <div className="notes-list-item">
      <div className="note-header">
        <div>
          {id !== "new" && isEditing && (
            <NoteAction
              actionType="UPDATE"
              onClick={() => handleNoteAction("UPDATE")}
            />
          )}
        </div>
        <div>
          {id !== "new" ? (
            <NoteAction
              actionType="DELETE"
              onClick={() => handleNoteAction("DELETE")}
            />
          ) : note?.body === "" ? (
            ""
          ) : (
            <CreateNoteButton note={note} navigate={navigate} />
          )}
        </div>
      </div>
      <div>
        <div>
          <textarea
            className="notes-title-input"
            name="title"
            placeholder="Title"
            maxLength="20"
            value={note?.title}
            onChange={(e) => handleChange(e, "title")}
          />
        </div>
        <div className="note">
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
