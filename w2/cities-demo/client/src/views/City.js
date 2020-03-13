import React, { useEffect, useState } from "react";

import axios from "axios";

const City = ({ id }) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + id)
      .then(res => setCity(res.data))
      .catch(console.log);
  }, [id]);

  if (city === null) {
    return "Loading ...";
  }

  return (
    <div>
      <h3>{city.name}</h3>
      <p>Population: {city.population}</p>
      <img
        style={{ paddingBottom: 20, borderBottom: "2px solid gray" }}
        width="70%"
        src={city.imgUrl}
        alt={`${city.name} city`}
      />
    </div>
  );
};

export default City;
