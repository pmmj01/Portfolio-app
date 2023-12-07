import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import SnakeGameMenu from "./pages/SnakeGame/SnakeGameMenu";
import NoteMenu from "./pages/Notes/NoteMenu";
import Home from "./pages/Home/Home";
import ToDo from "./pages/ToDo/ToDo";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/notes/*" element={<NoteMenu />} />
        <Route path="/snake/*" element={<SnakeGameMenu />} />
        <Route path="/todo/*" element={<ToDo />} />
        <Route path="/contact/*" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
