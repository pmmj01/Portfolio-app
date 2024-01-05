import React from "react";
import { Routes, Route } from "react-router-dom";
import ToDoBox from "../../components/ToDo/ToDoBox";
import ToDoListPage from "./ToDoListPage";

const ToDo = () => {
  return (
    <div className="container dark">
      <div className="app">
        <ToDoBox />
        <Routes>
          <Route path="/" exact element={<ToDoListPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default ToDo;
