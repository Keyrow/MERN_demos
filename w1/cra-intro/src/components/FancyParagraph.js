import React from "react";

import styles from "./FancyParagraph.module.css";

const FancyParagraph = props => {
  return (
    <p className={`${styles.fancy} ${styles.red} underline`}>
      {props.children}
    </p>
  );
};

export default FancyParagraph;
