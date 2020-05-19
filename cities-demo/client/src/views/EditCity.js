import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditCity = (props) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");

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

export default EditCity;
