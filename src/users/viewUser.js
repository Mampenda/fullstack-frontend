import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  //Object for storing user information (initialized as empty strings)
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    polls: "",
  });

  //Id object
  const { id } = useParams();

  //Calls loadUsers() and displays data on edit user page (If we don't use empty array as arg, this will load infinitely)
  useEffect(() => {
    //Load user data
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    };

    //Function call
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Profile</h2>

          <div className="card">
            <div className="card-header">
              <b>Details of user with id:</b> {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username: </b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>E-mail: </b>
                  {user.email}
                </li>
                {/* <li className="list-group-item">
                  <b>Polls:</b>
                  {user.polls}
                </li> */}
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
