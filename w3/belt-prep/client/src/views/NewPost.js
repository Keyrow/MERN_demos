import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      // long-form
      title: title,
      // shorthand
      description,
      imgUrl,
      primaryCategory,
      secondaryCategory,
    };

    axios
      .post("http://localhost:8000/api/posts", newPost)
      .then((res) => {
        navigate("/posts");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response);
      });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Title: </label>
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
            value={title}
          />
          {errors.title ? (
            <span style={{ color: "red", marginLeft: 5 }}>
              {errors.title.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Description: </label>
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            value={description}
          />
          {errors.description ? (
            <span style={{ color: "red", marginLeft: 5 }}>
              {errors.description.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Img Url: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
            value={imgUrl}
          />
          {errors.imgUrl ? (
            <span style={{ color: "red", marginLeft: 5 }}>
              {errors.imgUrl.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Primary Category: </label>
          <input
            onChange={(event) => {
              setPrimaryCategory(event.target.value);
            }}
            type="text"
            value={primaryCategory}
          />
          {errors.primaryCategory ? (
            <span style={{ color: "red", marginLeft: 5 }}>
              {errors.primaryCategory.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Secondary Category: </label>
          <input
            onChange={(event) => {
              setSecondaryCategory(event.target.value);
            }}
            type="text"
            value={secondaryCategory}
          />
          {errors.secondaryCategory ? (
            <span style={{ color: "red", marginLeft: 5 }}>
              {errors.secondaryCategory.message}
            </span>
          ) : (
            ""
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
