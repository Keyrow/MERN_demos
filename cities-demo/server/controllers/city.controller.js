const City = require("../models/city.model");

// export an OBJECT that is full of methods
module.exports = {
  // long-form key: value format
  create: function (req, res) {
    City.create(req.body)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    City.find()
      .then((cities) => {
        res.json(cities);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log(req);
    City.findById(req.params.id)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    City.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((updatedCity) => {
        res.json(updatedCity);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    City.findByIdAndDelete(req.params.id)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
