import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand ms-5" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#home" to={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" href="#home" to={'/'}>
                Help
              </Link>
            </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
