import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditCity = (props) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + props.id)
      .then((res) => {
        setName(res.data.name);
        setPopulation(res.data.population);
        setImgUrl(res.data.imgUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const editedCity = {
      // long-form: name key: value of name state var
      name: name,
      population,
      imgUrl,
    };

    axios
      .put("http://localhost:8000/api/cities/" + props.id, editedCity)
      .then((res) => {
        console.log(res);
        navigate("/cities/" + res.data._id);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {errors.name ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.name.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label>Population: </label>
        <input
          type="number"
          value={population}
          onChange={(event) => {
            setPopulation(event.target.value);
          }}
        />
        {errors.population ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.population.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label>Img Url: </label>
        <input
          type="text"
          value={imgUrl}
          onChange={(event) => {
            setImgUrl(event.target.value);
          }}
        />
        {errors.imgUrl ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.imgUrl.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default EditCity;
