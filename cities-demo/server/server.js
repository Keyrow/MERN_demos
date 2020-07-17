// MVC Diagram: https://mdn.mozillademos.org/files/16042/model-view-controller-light-blue.png

const port = 8000;
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config");

const app = express();
// req.body will be undefined without this!
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port} for requests to respond to.`);
});
