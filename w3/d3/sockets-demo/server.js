const express = require("express");

const app = express();

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});

const io = require("socket.io")(server);

let totalConnections = 0;

io.on("connect", (socket) => {
  // console.log(socket);
  totalConnections++;

  console.log(`New bidder connected. ${totalConnections} bidders connected.`);

  socket.on("disconnect", () => {
    totalConnections--;

    console.log(`bidder disconnected. ${totalConnections} bidders connected.`);
  });
});
