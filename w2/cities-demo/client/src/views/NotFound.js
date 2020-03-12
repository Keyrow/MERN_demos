import React from "react";

const NotFound = props => {
  console.log(props);

  return <div>{props.location.href} Not Found...</div>;
};

export default NotFound;
