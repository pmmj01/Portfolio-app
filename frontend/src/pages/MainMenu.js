import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="sidebar">
      <div className="dark-sidebar">
        <Link to="/">Home</Link>
        <Link to="/notes/">Notes</Link>
        <Link to="/snake/">Snake Game</Link>
      </div>
    </div>
  );
};

export default MainMenu;
