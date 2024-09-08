import React, { useState } from "react";

export default function AddUser() {
  //Object for storing user information (initialized as empty strings)
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  //De-construct userdata object (gets data from value in input div)
  const { name, username, email, password } = user;

  //Store data in state (put userdata from deconstruct object into user information object)
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //Will keep on adding the ne
  };

  //Pass input data to database
  const onSubmit = (e) => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form>
            <div className="mb-3">
              {/* <label htmlFor="Name" className="form-label">Name</label> */}
              <input
                type={"text"}
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)} //Pass event to onInputChange
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="Username" className="form-label">Username</label> */}
              <input
                type={"text"}
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)} //Pass event to onInputChange
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="Email" className="form-label">Email</label> */}
              <input
                type={"text"}
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)} //Pass the event to onInputChange
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="Password" className="form-label">Password</label> */}
              <input
                type={"text"}
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)} //Pass the event to onInputChange
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger mx-2">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
