// destructure the useState "hook" from the imported React object so that we can "hook" into this extra functionality
import React, { useState } from "react";
import SingleQuote from "./SingleQuote";

const Quotes = (props) => {
  // set the starting value of our quotes array to have these 3 quotes, this can change later, because the state of something can change
  // useState returns an array where the first item is the current state value and the 2nd item is a function used to update the state value
  const [quotes, setQuotes] = useState([]);

  // state for each input box of the form, since the value of the input boxes can change
  const [submittedBy, setSubmittedBy] = useState("");
  const [submittedQuote, setSubmittedQuote] = useState("");

  const handleDelete = (event, delIdx) => {
    const filteredQuotes = quotes.filter((quote, i) => {
      // when true is returned, the item is kept in the filter
      return delIdx !== i;
    });

    // DO NOT alter state directly, filteredQuotes is a NEW array that .filter created
    // pass the new array the function that will update the quotes variable with this new array
    setQuotes(filteredQuotes);
  };

  const handleSubmit = (event) => {
    // prevent the default page refresh behavior of form
    event.preventDefault();

    const newQuote = {
      submittedBy: submittedBy,
      // shorthand if key is named same as the var that has the value
      submittedQuote,
      isSelected: false,
    };

    // update with a NEW array that has the old quotes
    // plus the newQuote as the last item
    setQuotes([...quotes, newQuote]);

    // reset input box values
    setSubmittedBy("");
    setSubmittedQuote("");
  };

  const selectQuote = (selectedIdx) => {
    // without .map
    // const quotesCopy = [...quotes];
    // for (let i = 0; i < quotesCopy.length; ++i) {
    //   if (i === selectedIdx) {
    //     quotesCopy[i].isSelected = true;
    //   } else {
    //     quotesCopy[i].isSelected = false;
    //   }
    // }

    const updatedQuotes = quotes.map((quote, i) => {
      if (i === selectedIdx) {
        quote.isSelected = true;
      } else {
        quote.isSelected = false;
      }

      return quote;
    });

    setQuotes(updatedQuotes);
  };

  return (
    <div>
      {/* <p>current state of submittedBy: {submittedBy}</p>
      <p>current state of submittedQuote: {submittedQuote}</p> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Submitted By: </label>
          <input
            onChange={(event) => {
              setSubmittedBy(event.target.value);
            }}
            type="text"
            value={submittedBy}
          />
        </div>

        <div>
          <label>Quote: </label>
          <input
            onChange={(event) => {
              setSubmittedQuote(event.target.value);
            }}
            type="text"
            value={submittedQuote}
          />
        </div>
        <button>Add Quote</button>
      </form>
      <div>
        {quotes.map((quoteObj, idx) => {
          let classes = "";

          if (quoteObj.isSelected) {
            classes += "selected-quote ";
          }

          return (
            <div
              className={classes}
              key={idx}
              onClick={(event) => {
                selectQuote(idx);
              }}
            >
              <hr />
              <button
                onClick={(event) => {
                  handleDelete(event, idx);
                }}
              >
                Delete
              </button>{" "}
              <SingleQuote quote={quoteObj}></SingleQuote>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quotes;
