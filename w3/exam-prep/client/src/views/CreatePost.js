import React, { useState } from "react";

import { navigate } from "@reach/router";

import axios from "axios";

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    const newPost = {
      // long-form
      title: title,
      // shorthand because key name and value stored in matching var name
      description,
      imgUrl
    };

    axios
      .post("http://localhost:8000/api/posts", newPost)
      .then(res => {
        navigate("/posts/" + res.data._id);
      })
      .catch(err => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input onChange={event => setTitle(event.target.value)} type="text" />
          {errors.title ? (
            <span className="error">{errors.title.message}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Description: </label>
          <textarea
            onChange={event => setDescription(event.target.value)}
            type="text"
          ></textarea>
          {errors.description ? (
            <span className="error">{errors.description.message}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>ImgUrl: </label>
          <input
            onChange={event => setImgUrl(event.target.value)}
            type="text"
          />
          {errors.imgUrl ? (
            <span className="error">{errors.imgUrl.message}</span>
          ) : (
            ""
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
