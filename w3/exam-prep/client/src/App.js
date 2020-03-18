import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import CreatePost from "./views/CreatePost";
import SinglePost from "./views/SinglePost";
import Posts from "./views/Posts";
import EditPost from "./views/EditPost";

function App() {
  return (
    <>
      <div className="container">
        <Link to="/posts">View All Posts</Link>{" "}
        <Link to="/posts/new">Create Post</Link>
      </div>
      <div className="container-flex justify-content-center">
        <Router>
          <Redirect from="/" to="/posts" noThrow="true" />
          <CreatePost path="/posts/new" />
          <SinglePost path="/posts/:id" />
          <Posts path="/posts" />
          <EditPost path="/posts/:id/edit" />
        </Router>
      </div>
    </>
  );
}

export default App;
