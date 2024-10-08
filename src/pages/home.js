import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  //Object for storing user information (initialized as empty array)
  const [users, setUsers] = useState([]);

  //Id object
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();

  //Calls loadUsers() and displays data on edit user page (If we don't use empty array as arg, this will load infinitely)
  useEffect(() => {
    loadUsers();
  }, []);

  // Delete user function
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  //Load users using async/await (since java is executing line by line)
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);

    //Show data from (backend) database in console
    // console.log(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">E-mail</th>
              {/* <th scope="col">Polls</th> */}
              <th scope="col">Action</th>
              {/* <th scope="col">Password</th>
              <th scope="col">Polls</th> */}
            </tr>
          </thead>
          <tbody>
            {/*Get dynamic data from database (create new array from function-call on every array element in db)*/}
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {/* <td>{user.polls}</td> */}
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/ViewUser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/EditUser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
