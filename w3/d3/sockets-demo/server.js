const express = require("express");

const app = express();

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});

const io = require("socket.io")(server);

let totalConnections = 0;

const currentBidItem = {
  name: "How to actually learn any new programming concept.",
  description: "Programming book.",
  imgUrl: "https://i.redd.it/rslicsmlzcl01.jpg",
  startPrice: 19.95,
  currentPrice: 19.95,
  buyoutPrice: 39.99,
  category: "Books",
  isSold: false,
  bids: [],
};

io.on("connect", (socket) => {
  // console.log(socket);
  totalConnections++;
  console.log(`New bidder connected. ${totalConnections} bidders connected.`);

  socket.emit("item updated", currentBidItem);

  socket.on("disconnect", () => {
    totalConnections--;
    console.log(`bidder disconnected. ${totalConnections} bidders connected.`);
  });

  socket.on("new bid", (amount) => {
    currentBidItem.currentPrice = amount;
    currentBidItem.bids.push({
      id: socket.id,
      amount,
      date: new Date(),
    });

    io.emit("item updated", currentBidItem);
  });
});
