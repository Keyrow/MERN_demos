import React, { useState } from "react";

import { navigate } from "@reach/router";

import axios from "axios";

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    const newPost = {
      // long-form
      title: title,
      // shorthand because key name and value stored in matching var name
      description,
      imgUrl,
      primaryCategory,
      secondaryCategory
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

        <div>
          <label>Primary Category: </label>
          <input
            onChange={event => setPrimaryCategory(event.target.value)}
            type="text"
          />
          {errors.primaryCategory ? (
            <span className="error">{errors.primaryCategory.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Secondary Category: </label>
          <input
            onChange={event => setSecondaryCategory(event.target.value)}
            type="text"
          />
          {errors.secondaryCategory ? (
            <span className="error">{errors.secondaryCategory.message}</span>
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
