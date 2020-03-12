import React, { useEffect, useState } from "react";

import axios from "axios";

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then(res => {
        console.log(res);
        setCities(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h2>All Cities</h2>
      {cities.map((city, idx) => (
        <div key={idx}>
          <h3>{city.name}</h3>
          <p>Population: {city.population}</p>
          <img
            style={{ paddingBottom: 20, borderBottom: "2px solid gray" }}
            width="70%"
            src={city.imgUrl}
            alt={`${city.name} city`}
          />
        </div>
      ))}
    </div>
  );
};

export default Cities;
