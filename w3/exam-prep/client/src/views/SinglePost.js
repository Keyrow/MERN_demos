import React, { useEffect, useState } from "react";

import axios from "axios";

// id prop comes from the URL, see routing :id
const SinglePost = ({ id }) => {
  const [post, setPost] = useState(null);
  const [msg, setMsg] = useState("loading...");
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/" + id)
      .then(res => setPost(res.data))
      .catch(setMsg("Sumtin Wrong"));
  }, [id]);

  const handleVote = isUpvote => {
    if (alreadyVoted) {
      return;
    }

    if (isUpvote) {
      post.likeCount++;
    } else {
      post.dislikeCount++;
    }

    axios
      .put("http://localhost:8000/api/posts/" + id, post)
      .then(res => {
        const updatedPost = res.data;
        setPost(updatedPost);
        setAlreadyVoted(true);
      })
      .catch(console.log);
  };

  if (post === null) {
    return msg;
  }

  return (
    <div className="text-center">
      <h2>Title: {post.title}</h2>
      <span onClick={event => handleVote(true)} className="arrow">
        {post.likeCount}&uarr;{" "}
      </span>
      <span onClick={event => handleVote(false)} className="arrow">
        {post.dislikeCount}&darr;
      </span>
      <h4>Description:</h4>
      <p>{post.description}</p>
      <img src={post.imgUrl} width="65%" alt={post.title} />
    </div>
  );
};

export default SinglePost;
