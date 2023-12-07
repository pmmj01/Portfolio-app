import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="header">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/notes/">Notes</Link>
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
        <Link to="/todo">ToDo</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default MainMenu;
