import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../uicons/logo/logo.png";

const MainMenu = () => {
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  const handleGamesHover = () => {
    setIsGamesOpen(true);
  };

  const handleGamesLeave = () => {
    const gamesList = document.querySelector(".games-list");
    const isHoveringGames = gamesList && gamesList.matches(":hover");
    if (!isHoveringGames) {
      setIsGamesOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} className="logo-app" alt="Logo"/>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/notes/">Notes</Link>
        <Link to="/todo/">ToDo</Link>
        <div className="games-dropdown"
        onMouseEnter={handleGamesHover}
        onMouseLeave={handleGamesLeave}>
          <Link>Games</Link>
          {isGamesOpen && (
            <div className="games-list">
              <Link to="/snake/">Snake</Link>
              <Link to="/tictactoe/">Tic Tac Toe</Link>
            </div>
          )}
        </div>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default MainMenu;
