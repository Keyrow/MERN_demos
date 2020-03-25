const port = 8000;

const express = require("express");

const app = express();

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require("socket.io")(server);

let totalConnections = 0;

// const currentBidItem = {
//   name: "How you get anything done ever",
//   description: "Programming book.",
//   imgUrl: "https://boyter.org/static/books/CiHHf9-UYAA6aVB.jpg",
//   startPrice: 13.99,
//   currentPrice: 13.99,
//   buyoutPrice: 99.95,
//   category: "Books",
//   bids: []
// };

const currentBidItem = {
  name: "How to actually learn any new programming concept.",
  description: "Programming book.",
  imgUrl: "https://i.redd.it/rslicsmlzcl01.jpg",
  startPrice: 19.95,
  currentPrice: 19.95,
  buyoutPrice: 39.99,
  category: "Books",
  bids: [],
  isSold: false
};

io.on("connect", socket => {
  // console.log(socket);
  totalConnections++;
  logTotalConnections();

  // emit currentBidItem when socket is connected
  socket.emit("item updated", currentBidItem);

  socket.on("new bid", bidAmnt => {
    currentBidItem.currentPrice = bidAmnt;

    // store information about the bid in an object
    currentBidItem.bids.push({
      id: socket.id,
      amount: bidAmnt,
      date: new Date()
    });

    // emit currentBidItem again when it is updated
    io.emit("item updated", currentBidItem);
  });

  socket.on("disconnect", () => {
    totalConnections--;
    logTotalConnections();
  });
});

function logTotalConnections() {
  console.log(`New bidder connected. ${totalConnections} bidders connected`);
}
