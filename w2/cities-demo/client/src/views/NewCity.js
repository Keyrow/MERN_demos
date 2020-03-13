import React, { useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const NewCity = () => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // method 1, errors next to inputs
  // see EditCity for method 2
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    // create a new object with all the values of the input boxes
    const newCity = {
      // long-form
      name: name,
      // shorthand when var name matches key name
      population,
      imgUrl
    };

    axios
      .post("http://localhost:8000/api/cities", newCity)
      .then(res => {
        console.log(res);

        navigate("/cities");
      })
      .catch(err => {
        console.log(err.response);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <h2>New City</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input onChange={event => setName(event.target.value)} type="text" />
          {errors.name !== undefined ? (
            <span className="error">{errors.name.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Population: </label>
          <input
            onChange={event => setPopulation(event.target.value)}
            type="number"
          />
          {errors.population !== undefined ? (
            <span className="error">{errors.population.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Image Url: </label>
          <input
            onChange={event => setImgUrl(event.target.value)}
            type="text"
          />
          {errors.imgUrl !== undefined ? (
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

export default NewCity;
