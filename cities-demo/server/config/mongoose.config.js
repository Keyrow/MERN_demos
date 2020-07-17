const mongoose = require("mongoose");
const db_name = "cities-demo";

mongoose
  .connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Successfully connected to ${db_name}`);
  })
  .catch((err) => {
    console.log(`Mongoose connection to db ${db_name} failed:`, err);
  });
