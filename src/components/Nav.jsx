import { useEffect } from "react";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import httpClient from "../httpClient";
import UserProfile from "./UserProfile";
// Navigation Bar - using bootstrap

export default function Nav({ loggedIn, username }) {
  const [showUser, setShowUser] = useState(false);

  console.log(username);
  const handleClick = (event) => {
    event.preventDefault();
    if (showUser) {
      setShowUser(false);
    } else {
      if (loggedIn) {
        setShowUser(true);
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navig sticky-top NavBar">
        <a className="navbar-brand navTitle" href="/">
          <Link to="/" />
          ASTRODEX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="/">
              <Link to="/" />
              Home
            </a>
            <a className="nav-item nav-link" href="/Catalog">
              <Link to="/Catalog" />
              Catalog
            </a>
            <a className="nav-item nav-link" href="/Trivia">
              <link to="/Trivia" />
              Trivia
            </a>
            <a className="nav-item nav-link" href="/Sources">
              <Link to="/Sources" />
              Sources
            </a>
            {loggedIn ? (
              <a className="nav-item nav-link" href="/" onClick={handleClick}>
                {username}
              </a>
            ) : (
              <a className="nav-item nav-link" href="/Login">
                <Link to="/Login" />
                Login
              </a>
            )}
          </div>
        </div>
      </nav>
      {showUser && <UserProfile username={username} />}
    </div>
  );
}
