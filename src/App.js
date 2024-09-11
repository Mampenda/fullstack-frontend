/*Client REACT web service on port 3000*/
/*WANT 80 (http) or 444(https, whole world)*/

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Polls from "./polls/Polls";
import AllUsers from "./users/AllUsers";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AddUser" element={<AddUser />} />
          <Route exact path="/AllUsers" element={<AllUsers />} />
          <Route exact path="/EditUser/:id" element={<EditUser />} />
          <Route exact path="/ViewUser/:id" element={<ViewUser />} />
          <Route exact path="/Polls" element={<Polls />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
