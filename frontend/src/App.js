import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Notes/Header";
import NotesListPages from "./pages/Notes/NotesListPage";
import NotePage from "./pages/Notes/NotePage";
import NotesBox from "./components/Notes/NotesBox";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <NotesBox />
          <Routes>
            <Route path="notes/" exact element={<NotesListPages />} />
            <Route path="notes/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
