import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import "./App.css";

// outside component so it only runs one time when react imports this file
const socket = io(":8000");

function App() {
  // const [socket] = useState(() => {
  //   io(":8000");
  // });

  const [currentBidItem, setCurrentBidItem] = useState(null);
  const [bidAmnt, setBidAmnt] = useState("");

  // because of the 2nd arg being empty array, this useEffect runs only once on first load of component
  // this is important so these event listeners are not duplicated, listeners stay active until removed
  useEffect(() => {
    socket.on("item updated", (updatedItem) => {
      setCurrentBidItem(updatedItem);
      setBidAmnt((updatedItem.currentPrice + 1).toFixed(2));
    });

    // note that we're returning a callback function
    // this returned function is executed when the component is unmounted (no longer being rendered, removed from DOM)
    return () => {
      socket.disconnect(true);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (bidAmnt > currentBidItem.currentPrice) {
      socket.emit("new bid", +bidAmnt);
    }
  };

  if (currentBidItem === null) {
    return "Loading...";
  }

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="number"
          value={bidAmnt}
          min={(currentBidItem.startPrice + 1).toFixed(2)}
          step=".01"
          onChange={(event) => {
            setBidAmnt(event.target.value);
          }}
        />

        <button disabled={bidAmnt > currentBidItem.currentPrice ? false : true}>
          Place Bid
        </button>
      </form>

      <div>
        <h1>{currentBidItem.name}</h1>
        <p>Description: {currentBidItem.description}</p>
        <h4>Start Price: ${currentBidItem.startPrice}</h4>
        <h3>Current Price: ${currentBidItem.currentPrice}</h3>
        <hr />
        <div>
          <img src={currentBidItem.imgUrl} alt="bid item" width="35%" />
        </div>
      </div>

      <div>
        <h3>Bid History</h3>
        {currentBidItem.bids.map((bid, i) => {
          return (
            <p key={i}>
              Amount: {bid.amount} | By: {bid.id} | On: {bid.date}
            </p>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default App;
