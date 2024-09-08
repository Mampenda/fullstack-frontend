import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  //Navigation function
  let navigate = useNavigate();

  //Id object
  const { id } = useParams();

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

  //Calls loadUsers() and displays data on edit user page (If we don't use empty array as arg, this will load infinitely)
  useEffect(() => {
    //Load user data
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    };

    //Function call
    loadUser();
  }, []);

  //Pass input data to database
  const onSubmitClick = async (e) => {
    //Prevent url change when submit button is clicked
    e.preventDefault();

    //Put data in database
    await axios.put(`http://localhost:8080/user/${id}`, user);

    //Navigate to the home page
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          {/*Pass click event from form to onSubmitClick function*/}
          <form onSubmit={(e) => onSubmitClick(e)}>
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
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
