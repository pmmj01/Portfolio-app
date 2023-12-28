import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Notes/Header";
import NotesListPages from "../../pages/Notes/NotesListPage";
import NotePage from "../../pages/Notes/NotePage";
import NotesBox from "../../components/Notes/NotesBox";

const NoteMenu = () => {
  return (
    <div className="container dark">
      <div className="app">
        {/* <Header /> */}
        <NotesBox />
        <Routes>
          <Route path="/" exact element={<NotesListPages />} />
          <Route path="/:id" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default NoteMenu;
