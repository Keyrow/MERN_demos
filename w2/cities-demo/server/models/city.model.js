const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
    },
    population: {
      type: Number,
      required: [true, requiredMsg],
      min: [0, "{PATH} must be at least {MIN}"]
    },
    imgUrl: {
      type: String,
      required: [true, requiredMsg]
    }
  },
  { timestamps: true }
);

// register schema with mongoose and create the model, which will create a "cities" collection when we insert to it
const City = mongoose.model("City", CitySchema);

module.exports = City;
