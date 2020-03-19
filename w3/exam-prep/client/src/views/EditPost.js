import React, { useEffect, useState } from "react";

import { navigate } from "@reach/router";

import axios from "axios";

const EditPost = props => {
  console.log(props);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts/" + props.id)
      .then(res => {
        const post = res.data;

        setTitle(post.title);
        setDescription(post.description);
        setImgUrl(post.imgUrl);
      })
      .catch(console.log);
  }, [props.id]);

  const handleSubmit = event => {
    event.preventDefault();

    const editedPost = {
      // long-form
      title: title,
      // shorthand because key name and value stored in matching var name
      description,
      imgUrl
    };

    axios
      .put("http://localhost:8000/api/posts/" + props.id, editedPost)
      .then(res => navigate("/posts/" + res.data._id))
      .catch(err => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            onChange={event => setTitle(event.target.value)}
            value={title}
            type="text"
          />
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
            value={description}
            type="text"
          ></textarea>
        </div>
        <div>
          <label>ImgUrl: </label>
          <input
            onChange={event => setImgUrl(event.target.value)}
            value={imgUrl}
            type="text"
          />
          {errors.imgUrl ? (
            <span className="error">{errors.imgUrl.message}</span>
          ) : (
            ""
          )}
        </div>
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditPost;
