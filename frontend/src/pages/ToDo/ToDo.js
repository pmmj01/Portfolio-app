import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/ToDo/Header";
import ToDoBox from "../../components/ToDo/ToDoBox";
import ToDoListPage from "./ToDoListPage";
import TaskDetailsModal from "../../components/ToDo/TaskDetailsModal";

const ToDo = () => {
  return (
    <div className="container dark">
      <div className="app">
        {/* <Header /> */}
        <ToDoBox />
        <Routes>
          <Route path="/" exact element={<ToDoListPage />} />
          {/* <Route path="/</str:id>" element={<TaskDetailsModal/>} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default ToDo;
