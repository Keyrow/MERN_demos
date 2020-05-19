import React, { useEffect, useState } from "react";

import axios from "axios";

// const City = ({ id }) => {
const City = (props) => {
  console.log(props);

  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + props.id)
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (city === null) {
    return "Loading...";
  }

  return (
    <div>
      <h2>{city.name}</h2>
      <p>Population: {city.population}</p>
      <img
        src={city.imgUrl}
        alt={city.name}
        style={{
          paddingBottom: 20,
          borderBottom: "2px solid gray",
          width: "90%",
        }}
      />
    </div>
  );
};

export default City;
