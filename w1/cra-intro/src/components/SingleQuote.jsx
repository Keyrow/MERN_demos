import React from "react";
import styles from "./SingleQuote.module.css";

const SingleQuote = (props) => {
  console.log(props);

  return <q className={`${styles.italic} ${styles.bold}`}>{props.children}</q>;
};

export default SingleQuote;
