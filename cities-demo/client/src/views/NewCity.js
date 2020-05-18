import React, { useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const NewCity = (props) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCity = {
      // long-form: name key: value of name state var
      name: name,
      population,
      imgUrl,
    };

    axios
      .post("http://localhost:8000/api/cities", newCity)
      .then((res) => {
        console.log(res);
        navigate("/cities");
      })
      .catch((err) => {
        console.log(err);
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
      </div>
      <button>Submit</button>
    </form>
  );
};

export default NewCity;
