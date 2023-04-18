import "./App.css";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import HomeView from "./components/HomeView";
import Nav from "./components/Nav";
import Sources from "./components/Sources";
import Trivia from "./components/Trivia";
import QuizTest from "./components/Quizes/Quiz-Test";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quizes/QuizTwo.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Sources" element={<Sources />} />
        <Route path="/Trivia" element={<Trivia />} />
        <Route path="/QuizTest" element={<QuizTest />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
