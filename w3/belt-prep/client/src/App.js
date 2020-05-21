import React from "react";

import { Link, Redirect, Router } from "@reach/router";

import "./App.css";
import NotFound from "./views/NotFound";
import Posts from "./views/Posts";
import Post from "./views/Post";
import NewPost from "./views/NewPost";
import EditPost from "./views/EditPost";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/posts">All Posts</Link> <Link to="/posts/new">New Post</Link>
      </div>
      <Router>
        <Redirect from="/" to="/posts"></Redirect>
        <NotFound default noThrow="true" />
        <Posts path="/posts" />
        <Post path="/posts/:id" />
        <NewPost path="/posts/new" />
        <EditPost path="/posts/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
