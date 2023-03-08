import React from 'react'

// Navigation Bar - using bootstrap

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navig">
            <a className="navbar-brand" href="#">Astro Dex</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Catalog</a>
                <a className="nav-item nav-link" href="#">Trivia</a>
                </div>
            </div>
        </nav>
    )
}
