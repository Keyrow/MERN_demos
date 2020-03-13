import React, { useState, useEffect } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const EditCity = ({ id }) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");

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
      .catch(console.log);
  };

  return (
    <div>
      <h2>Edit City</h2>
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
