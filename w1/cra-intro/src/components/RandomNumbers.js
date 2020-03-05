import React, { useState } from "react";

import FancyParagraph from "./FancyParagraph";

const RandomNumbers = ({ title, subTitle }) => {
  /**
   * useState returns an array of two items: [curr state data, function to update state data]
   * we pass useState our starting data, which is an empty array
   * Array destructure syntax to take out the two items
   * from the array and put them into two variables
   * with these names, respectively
   */
  const [randNumbs, setRandNumbs] = useState([]);
  // above is shorthand for doing this:
  // const randNumbsState = useState([]);
  // const randNumbs = randNumbsState[0];
  // const setRandNumbs = randNumbsState[1];

  const handleClick = () => {
    const rand = Math.floor(Math.random() * 99);

    /**
     * update randNumbs by passing a new array that contains
     * all current randNumbs, with 1 more added to end
     * if you don't create a new array it won't update
     */

    const randNumbsCopy = [...randNumbs, rand];
    setRandNumbs(randNumbsCopy);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h5>{subTitle}</h5>
      <button onClick={handleClick}>Generate Number</button>
      {/* Create array of FancyParagraph Items with num inside */}
      {randNumbs.map((num, idx) => {
        return <FancyParagraph key={idx}>{num}</FancyParagraph>;
      })}
    </div>
  );
};

export default RandomNumbers;
