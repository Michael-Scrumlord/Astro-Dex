import { Canvas } from "@react-three/fiber";
import React from "react";
import "../App.css";
import "./sources.css";
import Stars from "./Stars";

export default function Sources() {
  return (
    <div className="sources-countainer">
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

      <div className="info-container">
        <div className="main-header">
          <h1>More Info</h1>
          <hr />
          <h3>Utilities/Components</h3>
        </div>

        <div className="row container-fluid">
          <div className="source-table col col-lg-6 col-md-12 container-fluid">
            <table>
              <thead>
                <tr>
                  <th>Library</th>
                  <th>Components Used</th>
                  <th>Documents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NASA Resources</td>
                  <td>Planet Models</td>
                  <td>
                    <a href=" https://nasa3d.arc.nasa.gov/models">More Info</a>
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
              </tbody>
            </table>
          </div>

          <div className="dev-container col col-lg-6 col-md-12 container-fluid">
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
    </div>
  );
}
