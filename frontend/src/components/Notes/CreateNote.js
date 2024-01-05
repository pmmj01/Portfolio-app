import React from "react";

const CreateNote = async (note, navigate) => {
  try {
    const response = await fetch(`/api/notes/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    if (response.ok) {
      const createdNote = await response.json();
      navigate(`/notes/${createdNote.id}`);
    } else {
      console.error("Failed to create the note.");
    }
  } catch (error) {
    console.error("Error creating the note: ", error);
  }
};

const CreateNoteButton = ({ note, navigate }) => {
  const handleCreateNote = async () => {
    try {
      await CreateNote(note, navigate);
      navigate(`/notes/`);
    } catch (error) {
      console.error("Failed to create the note: ", error);
    }
  };

  return <button onClick={handleCreateNote}>Add</button>;
};

export { CreateNoteButton };
