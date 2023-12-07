import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/notes/">Notes</Link>
        <Link to="/snake/">Snake Game</Link>
        <Link to="/todo">ToDo</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default MainMenu;
