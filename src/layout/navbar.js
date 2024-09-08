import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <Link className="navbar-brand" to="/">
              Poll Application
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="d-flex flex-row-reverse">
            <Link className="btn btn-outline-light" to="/">
              Home
            </Link>
            <Link className="btn btn-outline-light" to="AllUsers">
              Users
            </Link>
            <Link className="btn btn-outline-light" to="Polls">
              Polls
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
