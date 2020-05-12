import React, { useEffect, useState } from "react";

import axios from "axios";

const SingleLaunch = (props) => {
  const [launch, setLaunch] = useState(null);

  // empty array as arg2 makes useEffect run only one time when component first loads
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + props.id)
      .then((res) => {
        console.log(res);
        setLaunch(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [props.id]);

  if (launch === null) {
    return "Loading...";
  }

  return (
    <div>
      <h2>Mission: {launch.mission_name}</h2>
      <p>Date: {launch.launch_date_local}</p>
      <p>Details: {launch.details}</p>
      <p>Launch Success: {launch.launch_success}</p>
      <h3>Ships</h3>
      <ul>
        {launch.ships.map((ship, idx) => {
          return <li key={idx}>{ship}</li>;
        })}
      </ul>
      <a href={launch.links.video_link}>Launch Video</a>
    </div>
  );
};

export default SingleLaunch;
