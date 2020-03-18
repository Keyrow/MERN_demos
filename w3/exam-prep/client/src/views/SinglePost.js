import React, { useEffect, useState } from "react";

import axios from "axios";

// id prop comes from the URL, see routing :id
const SinglePost = ({ id }) => {
  const [post, setPost] = useState(null);
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/" + id)
      .then(res => setPost(res.data))
      .catch(setMsg("Sumtin Wrong"));
  }, [id]);

  if (post === null) {
    return msg;
  }

  return (
    <div className="text-center">
      <h2>Title: {post.title}</h2>
      <h4>Description:</h4>
      <p>{post.description}</p>
      <img src={post.imgUrl} width="65%" alt={post.title} />
    </div>
  );
};

export default SinglePost;
