import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import SnakeGameMenu from "./pages/SnakeGame/SnakeGameMenu";
import NoteMenu from "./pages/Notes/NoteMenu";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/notes/*" element={<NoteMenu />} />
        <Route path="/snake/*" element={<SnakeGameMenu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
