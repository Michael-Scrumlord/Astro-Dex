import React from "react";
import { Link } from "react-router-dom";
// Navigation Bar - using bootstrap

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navig sticky-top NavBar">
      <a className="navbar-brand navTitle" href="#">
        ASTRO DEX
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
        </div>
      </div>
    </nav>
  );
}
