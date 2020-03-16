import React from "react";
import "./App.css";

import { Link, Router, navigate } from "@reach/router";

import LogReg from "./views/LogReg";
import UserList from "./views/UserList";
import axios from "axios";

function App() {
  const logout = () => {
    axios
      .post(
        "http://localhost:8000/api/logout",
        {}, // no posted data
        { withCredentials: true } // send the cookie so it can be cleared
      )
      .then(res => console.log(res))
      .catch(console.log);

    navigate("/");
  };

  return (
    <>
      <div className="jumbotron">
        <h1>MERN Users</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div>
        <Link to="/users">Get Users List</Link>
      </div>
      <Router>
        <LogReg path="/" />
        <UserList path="/users" />
      </Router>
    </>
  );
}

export default App;
