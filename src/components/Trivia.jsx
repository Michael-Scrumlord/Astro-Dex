import { Canvas } from "@react-three/fiber";
import React from "react";
import "../App.css";
import Stars from "./Stars.jsx";
import "./assets/trivia.css";

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
					height: "100vh",
					width: "100%",
					borderRadius: "10px",
				}}
			>
				<Stars rotate="on" />
			</Canvas>
			<div id="overlay">
				<h1 className="title-label">ASTROTRIVIA</h1>

				<div className="row container-fluidi">
					<div className="col col-lg-4 col-md-6 d-flex justify-content-center">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={require("./assets/rocket.png")}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title"> Card Title</h5>
								<p className="card-text"> some text here</p>
								<a href="#" className="btn btn-primary">
									Select!
								</a>
							</div>
						</div>
					</div>
					<div className="col col-lg-4 col-md-6 d-flex justify-content-center">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={require("./assets/rocket.png")}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title"> Card Title</h5>
								<p className="card-text"> some text here</p>
								<a href="#" className="btn btn-primary">
									Select!
								</a>
							</div>
						</div>
					</div>
					<div className="col col-lg-4 col-md-6 d-flex justify-content-center">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={require("./assets/rocket.png")}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title"> Card Title</h5>
								<p className="card-text"> some text here</p>
								<a href="#" className="btn btn-primary">
									Select!
								</a>
							</div>
						</div>
					</div>
					<div className="col col-lg-4 col-md-6 d-flex justify-content-center">
						<div className="card" style={{ width: "18rem" }}>
							<img
								src={require("./assets/rocket.png")}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title"> Card Title</h5>
								<p className="card-text"> some text here</p>
								<a href="#" className="btn btn-primary">
									Select!
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
