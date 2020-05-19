import React, { useEffect, useState } from "react";

import { Link, navigate } from "@reach/router";

import axios from "axios";

const Cities = (props) => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/cities").then((res) => {
      console.log(res);
      setCities(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/cities/" + id)
      .then((res) => {
        const filteredCities = cities.filter((city) => {
          return city._id !== id;
        });

        setCities(filteredCities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (cities === null) {
    return "Loading...";
  }

  return (
    <div>
      <h2>All Cities</h2>

      {cities.map((city) => {
        return (
          <div key={city._id}>
            <h3>
              <Link to={`/cities/${city._id}`}>{city.name}</Link>
            </h3>
            <p>Population: {city.population}</p>
            <div style={{ marginBottom: "5px" }}>
              <button
                onClick={(event) => {
                  handleDelete(city._id);
                }}
              >
                Delete
              </button>{" "}
              {/* this could be an anchor tag instead of using navigate, but we want it to look like a button. If using bootstrap could use a class to make the anchor tag look like a button */}
              <button
                onClick={(event) => {
                  navigate(`/cities/${city._id}/edit`);
                }}
              >
                Edit
              </button>
            </div>
            <Link to={`/cities/${city._id}`}>
              <img
                src={city.imgUrl}
                alt={city.name}
                style={{
                  paddingBottom: 20,
                  borderBottom: "2px solid gray",
                  width: "15%",
                }}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cities;
