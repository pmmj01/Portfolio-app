import React from "react";

const NoteAction = ({ actionType, onClick }) => {
  const handleAction = () => {
    if (onClick) {
      onClick(); // Wywołanie przekazanej funkcji obsługującej akcję
    }
  };

  return (
    <button onClick={handleAction}>
      {actionType === "DELETE" ? "Delete" : "Save"}
    </button>
  );
};

export default NoteAction;