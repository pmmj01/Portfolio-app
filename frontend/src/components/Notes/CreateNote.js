const CreateNote = async (note, navigate) => {
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
};

export default CreateNote;
