import React from "react";

const AddNote = async (id, note) => {
  await fetch(`/api/notes/notes/${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
};

export default AddNote;
