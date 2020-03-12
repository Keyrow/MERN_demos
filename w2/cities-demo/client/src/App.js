import React from "react";
import "./App.css";

import { Redirect, Router, Link } from "@reach/router";
import NotFound from "./views/NotFound";
import NewCity from "./views/NewCity";
import Cities from "./views/Cities";

function App() {
  return (
    <div>
      <Link to="/cities/new">New City</Link> <Link to="/cities">All City</Link>
      <Router>
        <Redirect from="/" to="/cities" noThrow="true" />
        <Cities path="/cities" />
        <NewCity path="/cities/new" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
