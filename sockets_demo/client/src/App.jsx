import React, { useEffect, useState } from "react";
import "./App.css";

import io from "socket.io-client";

function App() {
  // initial state is the returned socket from io func
  const [socket] = useState(() => io(":8000"));
  const [currentBidItem, setCurrentBidItem] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    // add this listener once so we don't have
    // multiple listeners listening for same event
    socket.on("item updated", bidItem => {
      setCurrentBidItem(bidItem);

      // toFixed fixes floating point math imprecision
      setBidAmount((bidItem.currentPrice + 1).toFixed(2));
    });

    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  const handleBidSubmit = event => {
    event.preventDefault();

    if (bidAmount > currentBidItem.currentPrice) {
      // + to convert bidAmount string to a number
      socket.emit("new bid", +bidAmount);
    }
  };

  if (currentBidItem === null) {
    return "No item to bid on.";
  }

  return (
    <div className="container-flex justify-content-center">
      <div className="container">
        <div>
          <h1>{currentBidItem.name}</h1>
          <p>Description: {currentBidItem.description}</p>
          <h4>Start Price: ${currentBidItem.startPrice}</h4>
          <h3>Current Price: ${currentBidItem.currentPrice}</h3>
          <hr />
          <img
            src={currentBidItem.imgUrl}
            alt="bid item"
            style={{ marginRight: 15, width: "70%" }}
          />
          <div>
            <h3>Bid History</h3>
            {currentBidItem.bids.map((bid, idx) => (
              <p key={idx}>
                {bid.amount} | By: {bid.id} | On: {bid.date}
              </p>
            ))}
          </div>
          <hr />
        </div>

        <form onSubmit={handleBidSubmit}>
          <input
            onChange={event => setBidAmount(event.target.value)}
            min={bidAmount}
            type="number"
            value={bidAmount}
          />
          <button
            disabled={bidAmount > currentBidItem.currentPrice ? false : true}
          >
            Place Bid
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
