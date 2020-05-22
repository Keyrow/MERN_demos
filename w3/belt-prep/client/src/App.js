import React, { useState } from "react";

import { Link, Redirect, Router } from "@reach/router";

import "./App.css";
import NotFound from "./views/NotFound";
import Posts from "./views/Posts";
import Post from "./views/Post";
import NewPost from "./views/NewPost";
import EditPost from "./views/EditPost";

function App() {
  const [appWideMsg, setAppWideMsg] = useState("message in app.js");

  const sharedFunctionality = (msg) => {
    console.log("sharing functionality");
    setAppWideMsg(msg);
  };

  return (
    <div className="App">
      <h1>App Wide Message: {appWideMsg}</h1>
      <div style={{ marginBottom: 20 }}>
        <Link to="/posts">All Posts</Link> <Link to="/posts/new">New Post</Link>
      </div>
      <Router>
        <Redirect noThrow="true" from="/" to="/posts"></Redirect>
        <Posts path="/posts" />
        <Post sharedFunctionality={sharedFunctionality} path="/posts/:id" />
        <NewPost path="/posts/new" />
        <EditPost path="/posts/:id/edit" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
