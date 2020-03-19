import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "@reach/router";

const Posts = props => {
  const [posts, setPosts] = useState([]);
  const [randomPost, setRandomPost] = useState({});
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then(res => setPosts(res.data))
      .catch(console.log);
  }, []);

  const handleDelete = idToDel => {
    axios
      .delete("http://localhost:8000/api/posts/" + idToDel)
      .then(res => {
        const filteredPosts = posts.filter(post => post._id !== idToDel);
        setPosts(filteredPosts);
      })
      .catch(console.log);
  };

  const handleRandomPost = () => {
    const randIdx = Math.floor(Math.random() * posts.length);
    const randomItem = posts[randIdx];
    setRandomPost(randomItem);
  };

  return (
    <>
      <div>
        <label>DO A SEARCH </label>
        <input
          onChange={event => setSearchCategory(event.target.value)}
          type="text"
        />
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
            <th>Primary Category</th>
            <th>Secondary Category</th>
          </tr>
        </thead>
        <tbody>
          {posts
            .filter(post => {
              if (searchCategory === "") {
                return true;
              } else {
                return (
                  post.primaryCategory.includes(searchCategory) ||
                  post.secondaryCategory.includes(searchCategory)
                );
              }
            })
            .map((post, idx) => (
              <tr key={idx}>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>{post.primaryCategory}</td>
                <td>{post.secondaryCategory}</td>
                <td>
                  <Link to={"/posts/" + post._id}>Details</Link> |{" "}
                  <Link to={"/posts/" + post._id + "/edit"}>Edit</Link> |{" "}
                  <button onClick={event => handleDelete(post._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <h3>Random Post:</h3>
        <button onClick={handleRandomPost}>Get Random Post</button>
        <p>{JSON.stringify(randomPost)}</p>
      </div>
    </>
  );
};

export default Posts;
