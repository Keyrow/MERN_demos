import React, { useEffect, useState } from "react";
import "./App.css";

import io from "socket.io-client";

function App() {
  // initial state is the returned socket from io func
  const [socket] = useState(() => io(":8000"));
  const [currentPrice, setCurrentPrice] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    // add this listener once so we don't have
    // multiple listeners listening for same event
    socket.on("item updated", newPrice => {
      setCurrentPrice(newPrice);

      // toFixed fixes floating point math imprecision
      setBidAmount((newPrice + 1).toFixed(2));
    });
  }, []);

  const handleBidSubmit = event => {
    event.preventDefault();

    if (bidAmount > currentPrice) {
      // + to convert bidAmount string to a number
      socket.emit("new bid", +bidAmount);
    }
  };

  return (
    <div>
      <p>Current Price: {currentPrice}</p>

      <form onSubmit={handleBidSubmit}>
        <input
          onChange={event => setBidAmount(event.target.value)}
          min={currentPrice}
          type="number"
          value={bidAmount}
        />
        <button disabled={bidAmount > currentPrice ? false : true}>
          Place Bid
        </button>
      </form>
    </div>
  );
}

export default App;
