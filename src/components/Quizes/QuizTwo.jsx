import React, { useState } from "react";
import Stars from "../Stars.jsx";
import { Canvas } from "@react-three/fiber";
import { useNavigate, useLocation } from "react-router-dom";
import { Questions } from "./Questions.js";
import "./QuizTwo.css";

export default function Quiz() {
  const { state } = useLocation();

  //properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(state.index_start);
  const [questionCount, setQuestionCount] = useState(1);
  const totalQuestions = state.index_end - state.index_start + 1;

  //Helper Function
  const optionClicked = (option) => {
    if (option.isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion < state.index_end) {
      setQuestionCount(questionCount + 1);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(state.index_start);
    setFinalResults(false);
    setQuestionCount(1);
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
        <h1>{state.title}</h1>

        {showFinalResults ? (
          /*4. Final Results*/
          <div className="final-results">
            <h1>Final Results!</h1>
            <h2>
              {score} out of {totalQuestions} correct - (
              {((score / totalQuestions) * 100).toFixed(0)}%)
            </h2>
            <button onClick={() => restartQuiz()}>Restart Quiz</button>
            <button id="TriviaSelect" onClick={triviaSelection}>
              Trivia Selection
            </button>
          </div>
        ) : (
          /* 3. Questions */
          <div className="question-card">
            <h2>
              Question {questionCount} out of {totalQuestions}
            </h2>
            <h3 className="question-text">{Questions[currentQuestion].text}</h3>

            <ul>
              {Questions[currentQuestion].options.map((option) => {
                return (
                  <li onClick={() => optionClicked(option)} key={option.id}>
                    {option.text}
                  </li>
                );
              })}
            </ul>
            <h2>Current Score: {score}</h2>
          </div>
        )}

        {/* 2. Current Score*/}
      </div>
    </div>
  );
}
