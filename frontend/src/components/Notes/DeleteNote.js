const DeleteNote = async (id) => {
  await fetch(`/api/notes/notes/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default DeleteNote;
