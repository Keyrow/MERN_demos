import React, { useState } from "react";

import Quote from "./Quote";
import NewQuote from "./NewQuote";

const Quotes = props => {
  const [quotes, setQuotes] = useState([]);

  const receiveTextFromChild = text => {
    console.log(text);
  };

  const newQuoteSubmitted = newQuote => {
    setQuotes([...quotes, newQuote]);
  };

  return (
    <fieldset style={{ border: "1px solid red", padding: 10 }}>
      <legend>
        <code>Quotes.js</code>
      </legend>

      <div style={{ color: "red" }}>
        <p>Code Comments:</p>
        <pre>
          <code>const [quotes, setQuotes] = useState([]);</code>
        </pre>
      </div>

      <NewQuote
        newQuoteSubmitted={newQuoteSubmitted}
        receiveTextFromChild={receiveTextFromChild}
      />

      <hr />
      {quotes.map((currQuote, i) => {
        return <Quote key={i} quoteData={currQuote} />;
      })}
    </fieldset>
  );
};

export default Quotes;
