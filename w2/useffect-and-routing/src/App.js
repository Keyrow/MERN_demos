import React from "react";
import "./App.css";
import { Link, Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import Secondary from "./views/Secondary";
import Launches from "./views/Launches";
import SingleLaunch from "./views/SingleLaunch";

// import Product from "./components/Product";

function App() {
  return (
    <div>
      <Link to="/">Homepage</Link> <Link to="/secondary">Secondary</Link>{" "}
      <Link to="/launches">Launches</Link>
      <Router>
        <Homepage path="/" />
        <Secondary path="/secondary" />
        <Launches path="/launches" />
        <SingleLaunch path="/launches/:id" />
        <Redirect from="/home" to="/" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
