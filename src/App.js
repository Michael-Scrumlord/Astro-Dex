import "./App.css";
import { Route, Routes } from "react-router-dom";
import Catalog from "./components/Catalog";
import HomeView from "./components/HomeView";
import Nav from "./components/Nav";
import Sources from "./components/Sources";
import Trivia from "./components/Trivia";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quizes/QuizTwo.jsx";
import { useEffect, useState } from "react";
import httpClient from "./httpClient";



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  console.log(loggedIn)

  useState(() => {
    (async () => {
      try {
        const response = await httpClient.get("http://127.0.0.1:5000/api/checklogin")
        setUsername(response.data.username)
        setLoggedIn(response.data.isLoggedIn)
      } catch (error) {
        console.log(error.response.data)
        setLoggedIn(false)
      }
    })()
  }, [])

  return (
    <div>
      <div>
      <Nav loggedIn={loggedIn} username={username}/>
      </div>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Sources" element={<Sources />} />
        <Route path="/Trivia" element={<Trivia />} />
        <Route exact path="/Login" element={<Login/>}  />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;



