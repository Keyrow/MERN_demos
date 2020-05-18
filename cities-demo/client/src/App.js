import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import NewCity from "./views/NewCity";
import Cities from "./views/Cities";

function App() {
  return (
    <div className="App">
      <Link to="/cities">All Cities</Link>{" "}
      <Link to="/cities/new">New City</Link>
      <Router>
        <Redirect from="/" to="/cities" noThrow="true" />
        <NotFound default />
        <Cities path="/cities" />
        <NewCity path="/cities/new" />
      </Router>
    </div>
  );
}

export default App;
