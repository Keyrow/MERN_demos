const port = 8000;

const express = require("express");

const app = express();

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require("socket.io")(server);

let totalConnections = 0;
let currentPrice = 15;

io.on("connect", socket => {
  // console.log(socket);
  totalConnections++;
  logTotalConnections();

  // emit currentPrice when socket is connected
  socket.emit("item updated", currentPrice);

  socket.on("new bid", bid => {
    currentPrice = bid;
    // emit currentPrice again when it is updated
    io.emit("item updated", currentPrice);
  });

  socket.on("disconnect", () => {
    totalConnections--;
    logTotalConnections();
  });
});

function logTotalConnections() {
  console.log(`New bidder connected. ${totalConnections} bidders connected`);
}
