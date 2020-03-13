import React, { useState, useEffect } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const EditCity = ({ id }) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // method 2, all errors at top
  // see NewCity for method 1
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + id)
      .then(res => {
        const city = res.data;

        setName(city.name);
        setPopulation(city.population);
        setImgUrl(city.imgUrl);
      })
      .catch(console.log);
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();

    const editedCity = {
      name: name,
      // shorthand because key name and var name are same
      population,
      imgUrl
    };

    axios
      .put("http://localhost:8000/api/cities/" + id, editedCity)
      .then(res => navigate("/cities/" + id))
      .catch(err => {
        // extract error messages out of the errors object and put them into an array
        const errorsObj = err.response.data.errors;
        const errorMessages = [];

        for (const key in errorsObj) {
          errorMessages.push(errorsObj[key].message);
        }

        setErrors(errorMessages);
      });
  };

  return (
    <div>
      <h2>Edit City</h2>

      <div>
        {errors.map(msg => (
          <p className="error">{msg}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
          />
        </div>

        <div>
          <label>Population: </label>
          <input
            value={population}
            onChange={event => setPopulation(event.target.value)}
            type="number"
          />
        </div>

        <div>
          <label>Image Url: </label>
          <input
            value={imgUrl}
            onChange={event => setImgUrl(event.target.value)}
            type="text"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditCity;
