import React from "react";
import { Link } from "react-router-dom";

export default function viewUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Profile</h2>

          <div className="card">
            <div className="card-header">
              Details of user with id:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                </li>
                <li className="list-group-item">
                  <b>Username:</b>
                </li>
                <li className="list-group-item">
                  <b>E-mail:</b>
                </li>
                <li className="list-group-item">
                  <b>Polls:</b>
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to={"/"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
