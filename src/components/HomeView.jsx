import React from "react";
import Stars from "./Stars";
import "../App.css";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="HomeView">
      <Canvas
        camera={{
          fov: 35,
          zoom: 0.1,
          near: 1,
          far: 1000,
          position: [-6, 0, 0],
        }}
        style={{
          position: "fixed",
          backgroundColor: "#1b1b1c",
          height: "100%",
          width: "100%",
        }}
      >
        <Stars rotate="on" />
      </Canvas>
      <div className="HomeViewText">
        <div className="TextContainer">
          <h1 className="Title">ASTRO DEX</h1>
          <div className="Subtitle">
            <p></p>
            <p>DIVING DEEP INTO THE DEEP END OF THE UNIVERSE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
