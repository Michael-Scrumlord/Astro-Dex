import { Canvas } from "@react-three/fiber";
import React from "react";
import { Link } from "react-router-dom";
import "./assets/trivia.css";
import Stars from "./Stars.jsx";

// This renders the catalog, side bar and planet 3D object. will need to seperate Sidebar and Planet into 2 components and create a "Catalog View"

export default function Catalog() {
  return (
    <div className="TriviaContainer">
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
          height: "100%",
          width: "100%",
        }}
      >
        <Stars rotate="on" />
      </Canvas>
      <h1 className="title-label">ASTROTRIVIA</h1>
      <div id="overlay">
        <div className="row container-fluid">
          <div className="col col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={require("./assets/SolarSystem.png")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">[Easy] Solar System</h5>
                <p className="card-text">
                  Warm up your knowledge of our solar system with this quiz!
                </p>
                <a href="/Quiz" className="btn btn-primary">
                  <Link to="/Quiz" /> Select!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
