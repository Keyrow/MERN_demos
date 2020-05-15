const mongoose = require("mongoose");
const requiredErrMsg = "{PATH} is required.";

// {PATH} gets replaced with the key name
const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, requiredErrMsg],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    population: {
      type: Number,
      required: [true, requiredErrMsg],
      min: [0, "{PATH} must be at least 0"],
    },
    imgUrl: {
      type: String,
      required: [true, requiredErrMsg],
    },
  },
  { timestamps: true }
);

const City = mongoose.model("City", CitySchema);

module.exports = City;
