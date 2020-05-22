import React, { useEffect, useState } from "react";

import { Link, navigate } from "@reach/router";
import axios from "axios";

const Post = (props) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("post.js useEffect");
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/posts/${props.id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDelete = (delId) => {
    axios
      .delete("http://localhost:8000/api/posts/" + delId)
      .then((res) => {
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  if (post === null) {
    return "Loading...";
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        Categories: {post.primaryCategory}, {post.secondaryCategory}
      </p>
      <p>
        <b>Description: </b>
        {post.description}
      </p>
      <p>
        Likes: {post.likeCount} | Dislikes: {post.dislikeCount}
      </p>
      <img src={post.imgUrl} alt="post" width="40%" />
      <p>Posted On: {post.createdAt}</p>
      <Link to={`/posts/${post._id}/edit`}>Edit</Link>{" "}
      <button
        onClick={(event) => {
          handleDelete(post._id);
        }}
      >
        Delete
      </button>
      <button
        onClick={(event) => {
          props.sharedFunctionality("message from Post.js component.");
        }}
      >
        Shared Functionality
      </button>
      <hr />
    </div>
  );
};

export default Post;
