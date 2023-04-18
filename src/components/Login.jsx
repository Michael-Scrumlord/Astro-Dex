import React, { useState } from "react";
import Stars from "./Stars";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setaPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        username,
        password,
      });
      console.log(response.data);
      setError("");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="FormContainer">
      <Canvas
        camera={{
          fov: 35,
          zoom: 0.1,
          near: 1,
          far: 1000,
          position: [-6, 0, 0],
        }}
        style={{
          position: "absolute",
          backgroundColor: "#1b1b1c",
          height: "100%",
          width: "100%",
        }}
      >
        <Stars rotate="on" />
      </Canvas>
      <div className="FormBox">
        <h1>Sign in to Astro Dex</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="FormField">
            <div className="FormControl">
              <input
                placeholder="Username"
                className="FormInput"
                type="text"
                autoComplete="off"
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="FormField">
            <div className="FormControl">
              <input
                placeholder="Password"
                className="FormInput"
                type="password"
                name="password"
                value={password}
                onChange={(event) => setaPassword(event.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="FormButton is-block is-info is-fullwidth"
          >
            Login
          </button>
          {error && <p className="FormError">{error}</p>}
        </form>
        Don't have an account? <Link to="/Signup">Sign Up Here</Link>
      </div>
    </div>
  );
}
