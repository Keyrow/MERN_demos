import React, { useEffect, useState } from "react";

import { Link, navigate } from "@reach/router";
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

  const handleDelete = deleteId => {
    axios
      .delete("http://localhost:8000/api/cities/" + deleteId)
      .then(res => {
        const filteredCities = cities.filter(city => city._id !== deleteId);

        setCities(filteredCities);
      })
      .catch(console.log);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cities.map(city => {
          return (
            <tr key={city._id}>
              <td>
                <Link to={"/cities/" + city._id}>{city.name}</Link>
              </td>
              <td>
                <button onClick={event => navigate(`/cities/${city._id}/edit`)}>
                  Edit
                </button>{" "}
                <button onClick={event => handleDelete(city._id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Cities;
