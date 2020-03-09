import React from "react";

// destructure quoteData object out of props object, and destructure text and submitted by out of quoteData object
// const Quote = ({ quoteData: { text, submittedBy } }) => {

const Quote = ({ quoteData }) => {
  return (
    <fieldset style={{ border: "1px solid orange", padding: 10 }}>
      <legend>
        <code>Quote.js</code>
      </legend>

      <p>Submitted by: {quoteData.submittedBy}</p>
      <q>{quoteData.text}</q>
    </fieldset>
  );
};

export default Quote;
