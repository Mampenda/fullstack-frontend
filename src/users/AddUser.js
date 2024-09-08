import React from "react";

export default function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <div className="mb-3">
            <input
              type={"text"}
              className="form-control"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type={"text"}
              className="form-control"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="mb-3">
            <input
              type={"text"}
              className="form-control"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              type={"text"}
              className="form-control"
              placeholder="Password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <button type="submit" className="btn btn-outline-danger mx-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
