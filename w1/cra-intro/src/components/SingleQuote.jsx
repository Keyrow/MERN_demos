import React from "react";
import styles from "./SingleQuote.module.css";

const SingleQuote = (props) => {
  // console.log(props);

  return (
    <div>
      <h3>Submitted By: {props.quote.submittedBy}</h3>
      <h4>Quote:</h4>
      <q className={`${styles.italic} ${styles.bold}`}>
        {props.quote.submittedQuote}
      </q>
    </div>
  );
};

export default SingleQuote;
