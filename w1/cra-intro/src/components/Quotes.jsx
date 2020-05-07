// destructure the useState "hook" from the imported React object so that we can "hook" into this extra functionality
import React, { useState } from "react";
import SingleQuote from "./SingleQuote";

const Quotes = (props) => {
  // set the starting value of our quotes array to have these 3 quotes, this can change later, because the state of something can change
  // useState returns an array where the first item is the current state value and the 2nd item is a function used to update the state value
  const [quotes, setQuotes] = useState([
    "Born too early to explore the galaxy. Born too late to explore the earth. Born just in time to browse dank memes.",
    "I'll study later.",
    "I'm leaving the house right now. I'll be there soon.",
  ]);

  const handleDelete = (event, delIdx) => {
    const filteredQuotes = quotes.filter((quote, i) => {
      // when true is returned, the item is kept in the filter
      return delIdx !== i;
    });

    // DO NOT alter state directly, filteredQuotes is a NEW array that .filter created
    // pass the new array the function that will update the quotes variable with this new array
    setQuotes(filteredQuotes);
  };

  return (
    <div>
      {quotes.map((quoteStr, idx) => {
        return (
          <p key={idx}>
            <button
              onClick={(event) => {
                handleDelete(event, idx);
              }}
            >
              Delete
            </button>{" "}
            <SingleQuote>{quoteStr}</SingleQuote>
          </p>
        );
      })}
    </div>
  );
};

export default Quotes;
