/* 
  ALL THE VARIABLES IN THE .env file can just be turned into
  variables in server.js if you don't want to use "dotenv"
*/
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./config/mongoose.config")(process.env.DB_NAME);

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

require("./routes/user.routes")(app);

app.listen(process.env.DB_PORT, () =>
  console.log(`Listening on port ${process.env.DB_PORT}`)
);
