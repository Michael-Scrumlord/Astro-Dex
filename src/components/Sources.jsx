import { Canvas } from "@react-three/fiber";
import React from "react";
import "../App.css";
import "./sources.css";
import Stars from "./Stars";

//test
export default function Sources() {
  return (
    <div className="total-info navigation container-fluid Sources">
      <Canvas
        id="canvas"
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
      <div className="MainContainer">
        <div className="MainHeader">
          <h1>More Info</h1>
          <hr />
        </div>
      <div className="layout">
        {/* SOURCING CODING & MODEL RESOURCES */}
        <h3>Utilities/Components</h3>
        <div className="TableHeader">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr >
                <th>Library</th>
                <th>Components Used</th>
                <th>Documentation</th>
              </tr>
            </thead>
            </table >
        </div >
        <div className="TableContent">
        <table>
          <tr>
            <td>NASA Resources</td>
            <td>Planet Models</td>
            <td>
              <a href="https://nasa3d.arc.nasa.gov/models">More Info</a>
            </td>
          </tr>
          <tr>
            <td>Bootstrap</td>
            <td>Navbar, Cards, Grid</td>
            <td>
              <a href="https://getbootstrap.com/">More Info</a>
            </td>
          </tr>
          <tr>
            <td>React</td>
            <td>UI-Creation, Routing</td>
            <td>
              <a href="https://react.dev/">More Info</a>
            </td>
          </tr>
          <tr>
            <td>React-Three-Fiber</td>
            <td>Canvas, Rendering Models</td>
            <td>
              <a href="https://github.com/pmndrs/react-three-fiber">
                More Info
              </a>
            </td>
          </tr>
          <tr>
            <td>React-Three-Drei</td>
            <td>Orbit Controls, Stars</td>
            <td>
              <a href="https://github.com/pmndrs/drei">More Info</a>
            </td>
          </tr>
        </table>
        </div>
        </div>

        {/* DEV TEAM SECTION */}
        <div className="DevInfo">
        <h3>Dev Team</h3>
        <div className=" dev-team row container-fluid">
          <div className="dev col-lg-4 col-md-6">
            <img
              className="pfp"
              src={require("./assets/Stock-Profile.jpeg")}
              alt="default-pfp"
            />
            <h2>Alejandro Guerrero</h2>
            <ul>
              <li className="DevTitle">Project Owner</li>
              <li>EmailHere@whatever.com</li>
            </ul>
          </div>
          <div className="dev col-lg-4 col-md-6">
            <img
              className="pfp"
              src={require("./assets/Stock-Profile.jpeg")}
              alt="default-pfp"
            />
            <h2>Michael Daza</h2>
            <ul>
              <li className="DevTitle">Scrum Master</li>
              <li>EmailHere@whatever.com</li>
            </ul>
          </div>
          <div className="dev col-lg-4 col-md-6">
            <img
              className="pfp"
              src={require("./assets/Stock-Profile.jpeg")}
              alt="default-pfp"
            />
            <h2>Jesus Castillo</h2>
            <ul>
              <li className="DevTitle">Tech Lead</li>
              <li>EmailHere@whatever.com</li>
            </ul>
          </div>
          <div className="dev col-lg-4 col-md-6">
            <img
              className="pfp"
              src={require("./assets/Stock-Profile.jpeg")}
              alt="default-pfp"
            />
            <h2>Ali Omrani</h2>
            <ul>
              <li className="DevTitle">Engineer</li>
              <li>EmailHere@whatever.com</li>
            </ul>
          </div>
          <div className="dev col-lg-4 col-md-6">
            <img
              className="pfp"
              src={require("./assets/Stock-Profile.jpeg")}
              alt="default-pfp"
            />
            <h2>Dylan Martin</h2>
            <ul>
              <li className="DevTitle">Engineer</li>
              <li>EmailHere@whatever.com</li>
            </ul>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
}
