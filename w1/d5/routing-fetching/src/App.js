import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import HomePage from "./views/HomePage";
import Launches from "./views/Launches";
import SingleLaunch from "./views/SingleLaunch";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link> <Link to="/launches">Launches</Link>
      </nav>
      <Router>
        <HomePage path="/" />
        <Launches path="/launches" />
        {/* :id is a placeholder / route param since we don't know what id will be
        passed in until the URL is navigated to containing the actual id value 
        */}
        <SingleLaunch path="/launches/:id" />
        <Redirect from="/home" to="/" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
