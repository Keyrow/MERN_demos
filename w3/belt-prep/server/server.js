const port = 8000;
const db_name = "belt-demo-may";
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);

const app = express();
app.use(cors());

// req.body undefined without this!
app.use(express.json());

// long-form
// const routesFn = require("./routes/city.routes");
// routesFn(app);

// shorthand
require("./routes/post.routes")(app);

app.listen(port, () => {
  console.log(`Listening for requests on port ${port} to respond to.`);
});
