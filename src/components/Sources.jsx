import { Canvas } from "@react-three/fiber";
import React from "react";
import "../App.css";
import "./sources.css";
import Stars from "./Stars";

export default function Sources() {
	return (
		<div className="total-info navigation container-fluid">
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
					position: "absolute",
					float: "left",
					backgroundColor: "#1b1b1c",
					height: "100%",
					width: "100%",
				}}
			>
				<Stars rotate="on" />
			</Canvas>

			<div className="layout">
				<h1>More Info</h1>
				<hr />

				{/* SOURCING CODING & MODEL RESOURCES */}
				<h2>Utilities/Components</h2>
				<table className="util-table">
					<tr className="util-row">
						<th>Library</th>
						<th>Components Used</th>
						<th>Documentation</th>
					</tr>
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
				<hr />

				{/* DEV TEAM SECTION */}
				<h2>Dev Team</h2>
				<div className=" dev-team row container-fluid">
					<div className="dev col-lg-4 col-md-6">
						<img
							className="pfp"
							src={require("./assets/Stock-Profile.jpeg")}
							alt="default-pfp"
						/>
						<h3>Alejandro Guerrero</h3>
						<ul>
							<li>Project Owner</li>
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
							<li>Scrum Master</li>
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
							<li>Tech Lead</li>
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
							<li>Engineer</li>
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
							<li>Engineer</li>
							<li>EmailHere@whatever.com</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
