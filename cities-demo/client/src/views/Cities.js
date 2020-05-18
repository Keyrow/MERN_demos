import React, { useEffect, useState } from "react";

import axios from "axios";

const Cities = (props) => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cities").then((res) => {
      console.log(res);
      setCities(res.data);
    });
  }, []);

  if (cities === null) {
    return "Loading...";
  }

  return (
    <div>
      <h2>All Cities</h2>

      {cities.map((city) => {
        return (
          <div key={city._id}>
            <h3>{city.name}</h3>
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
      })}
    </div>
  );
};

export default Cities;
