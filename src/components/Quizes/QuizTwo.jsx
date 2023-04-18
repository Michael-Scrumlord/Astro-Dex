import React, { useState } from "react";
import Stars from "../Stars.jsx";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import "./QuizTwo.css";

export default function Quiz() {
  //properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the biggest planet in our solar system?",
      options: [
        { id: 0, text: "Saturn", isCorrect: false },
        { id: 1, text: "Jupiter", isCorrect: true },
        { id: 2, text: "Uranus", isCorrect: false },
        { id: 3, text: "Neptune", isCorrect: false },
      ],
    },
    {
      text: "Which planet does not have rings?",
      options: [
        { id: 0, text: "Saturn", isCorrect: false },
        { id: 1, text: "Jupiter", isCorrect: false },
        { id: 2, text: "Uranus", isCorrect: false },
        { id: 3, text: "Neptune", isCorrect: false },
        {
          id: 4,
          text: "All of these have rings (technically)",
          isCorrect: true,
        },
      ],
    },

    {
      text: "Which planet is closest to the sun?",
      options: [
        { id: 0, text: "Mercury", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Earth", isCorrect: false },
        { id: 3, text: "Mars", isCorrect: false },
      ],
    },
    {
      text: "[LIGHTNING ROUND] Which criteria for a full-sized planet does pluto fail?",
      options: [
        { id: 0, text: "It is in orbit around The Sun", isCorrect: false },

        {
          id: 1,
          text: "It has sufficient mass to assume hydrostatic equilibrium (a nearly round shape)",
          isCorrect: false,
        },
        {
          id: 2,
          text: "It has 'cleared the neighborhood' around its orbit",
          isCorrect: true,
        },
      ],
    },
  ];

  //Helper Function
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  let navigate = useNavigate();
  const triviaSelection = () => {
    let path = "/Trivia";
    navigate(path);
  };

  return (
    <div className="QuizContainer">
      <Canvas
        camera={{
          fov: 25,
          zoom: 0.1,
          near: 1,
          far: 1000,
          position: [-6, 0, 0],
        }}
        style={{
          position: "fixed",
          zindex: "1",
          backgroundColor: "#1b1b1c",
          height: "100%",
          width: "100%",
        }}
      >
        <Stars rotate="on" />
      </Canvas>

      <div className="quiz-wrapper">
        {/* 1. Header*/}
        <h1>OUR SOLAR SYSTEM</h1>

        {showFinalResults ? (
          /*4. Final Results*/
          <div className="final-results">
            <h1>Final Results</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {((score / questions.length) * 100).toFixed(0)}%)
            </h2>
            <button onClick={() => restartQuiz()}>Restart Quiz</button>
            <button onClick={triviaSelection}>Trivia Selection</button>
          </div>
        ) : (
          /* 3. Questions */
          <div className="question-card">
            <h2>
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    onClick={() => optionClicked(option.isCorrect)}
                    key={option.id}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* 2. Current Score*/}
        <h2>Current Score: {score}</h2>
      </div>
    </div>
  );
}
