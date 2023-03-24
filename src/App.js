import "./App.css";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import HomeView from "./components/HomeView";
import Nav from "./components/Nav";
import Sources from "./components/Sources";
import Trivia from "./components/Trivia";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Sources" element={<Sources />} />
        <Route path="/Trivia" element={<Trivia />} />
      </Routes>
    </div>
  );
}

export default App;
