const port = 8000;

const express = require("express");

const app = express();

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require("socket.io")(server);

let totalConnections = 0;

io.on("connect", socket => {
  console.log(socket);
  totalConnections++;
  logTotalConnections();

  socket.on("disconnect", () => {
    totalConnections--;
    logTotalConnections();
  });
});

function logTotalConnections() {
  console.log(`New bidder connected. ${totalConnections} bidders connected`);
}
