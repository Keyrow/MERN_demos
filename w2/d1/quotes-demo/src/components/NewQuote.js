import React, { useEffect, useState } from "react";

const NewQuote = ({ newQuoteSubmitted, receiveTextFromChild }) => {
  const [submittedBy, setSubmittedBy] = useState("");
  const [newQuoteText, setNewQuoteText] = useState("");

  // Unnecessary example: send a text to your worried parent
  useEffect(() => {
    receiveTextFromChild(
      "Hello my parent, I've been instantiated, thank you for bringing me into this world."
    );
  }, [receiveTextFromChild]);

  const handleSubmit = event => {
    event.preventDefault();

    const newQuote = {
      // shorthand, key name same as val variable name
      submittedBy,
      text: newQuoteText
    };

    newQuoteSubmitted(newQuote);

    // clear inputs after submit
    setSubmittedBy("");
    setNewQuoteText("");
  };

  return (
    <fieldset style={{ border: "1px solid blue", padding: 10 }}>
      <legend>
        <code>NewQuote.js</code>
      </legend>

      <div style={{ color: "blue" }}>
        <p>Code comments</p>
        <pre>
          <code>newQuoteSubmitted</code> is passed from parent as a prop so{" "}
          <code>NewQuote.js</code> can send the new quote to{" "}
          <code>Quotes.js</code>
        </pre>
      </div>

      <h2>New Quote</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Submitted By: </label>
          <input
            onChange={event => setSubmittedBy(event.target.value)}
            type="text"
            value={submittedBy}
          />
        </div>

        <div>
          <label>Quote: </label>
          <input
            onChange={event => setNewQuoteText(event.target.value)}
            type="text"
            value={newQuoteText}
          />
        </div>

        <button>Add Quote</button>
      </form>
    </fieldset>
  );
};

export default NewQuote;
