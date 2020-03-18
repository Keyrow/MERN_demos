import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "@reach/router";

const Posts = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then(res => setPosts(res.data))
      .catch(console.log);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, idx) => (
          <tr key={idx}>
            <td>{post.title}</td>
            <td>{post.description}</td>
            <td>
              <Link to={"/posts/" + post._id}>Details</Link> | Edit | Delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
