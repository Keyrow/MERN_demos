import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Launches = (props) => {
  const [launches, setLaunches] = useState([]);

  // empty array as arg2 makes useEffect run only one time when component first loads
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((res) => {
        console.log(res);
        setLaunches(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      {launches.map((launch, idx) => {
        return (
          <div key={launch.flight_number}>
            <h2>
              Mission:{" "}
              <Link to={"/launches/" + launch.flight_number}>
                {launch.mission_name}
              </Link>{" "}
              {/* <Link to={`/launches/${launch.flight_number}`}>
                {launch.mission_name}
              </Link> */}
            </h2>
            <p>Date: {launch.launch_date_local}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Launches;
