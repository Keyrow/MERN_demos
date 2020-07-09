import React, { useState } from "react";
import SingleQuote from "./SingleQuote";

const Quotes = (props) => {
  // console.log(props);

  // useState method is passed the initial value for the state we want to keep track of
  // useState returns an array with two items, idx 0: the current value of the state, idx 1: a function used to update the state
  const [quotes, setQuotes] = useState(props.quotes);

  const handleDelete = (delIdx) => {
    const filteredQuotes = quotes.filter((quote, idx) => {
      return delIdx !== idx;
    });

    // MUST always pass in a BRAND NEW arr or object if the state value is an arr or object, otherwise it won't update, because react sees it is the same object by reference and does not update
    setQuotes(filteredQuotes);
  };

  return (
    <div>
      {quotes.map((quoteStr, idx) => {
        return (
          <div key={idx}>
            <hr />
            <SingleQuote>{quoteStr}</SingleQuote>{" "}
            <button
              onClick={(event) => {
                handleDelete(idx);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
