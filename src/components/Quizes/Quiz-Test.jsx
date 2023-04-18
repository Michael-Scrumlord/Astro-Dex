import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Link } from "react-router-dom";
import "./quiz-test.css";
import "./quiz-helper.js";

export default function QuizTest() {
  return (
    <div className="wrapper">
      <Canvas
        camera={{
          fov: 20,
          zoom: 0.1,
          near: 1,
          far: 1000,
          position: [-6, 0, 0],
        }}
        style={{
          position: "fixed",
          zindex: "1",
          backgroundColor: "#1b1b1c",
          height: "100vh",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <Stars rotate="on" />
      </Canvas>
      <div id="quiz">
        <h1>Trivia Quiz</h1>

        <div id="quiz-inner">
          <p className="questions"></p>
          <div className="answers"></div>
        </div>
        <div className="checkAnswers">
          <h3>Correct?</h3>
          <div className="checker"></div>
        </div>
      </div>
      <button className="reloadButton">
        <a href="/QuizTest" className="btn btn-primary">
          <Link to="/QuizTest" /> Restart Quiz
        </a>
      </button>
      <button className="reloadButton">
        <a href="/Trivia" className="btn btn-primary">
          <Link to="/Trivia" /> Return To Menu
        </a>
      </button>
    </div>
  );
}
