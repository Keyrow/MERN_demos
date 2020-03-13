const City = require("../models/city.model");

// export an object full of methods
module.exports = {
  create(req, res) {
    City.create(req.body)
      .then(city => res.json(city))
      .catch(err => res.status(400).json(err));
  },
  getAll(req, res) {
    City.find()
      .then(cities => res.json(cities))
      .catch(err => res.json(err));
  },
  getOne(req, res) {
    City.findById(req.params.id)
      .then(city => res.json(city))
      .catch(err => res.json(err));
  },
  delete(req, res) {
    City.findByIdAndDelete(req.params.id)
      .then(deletedCity => res.json(deletedCity))
      .catch(err => res.json(err));
  },
  update(req, res) {
    City.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(updatedCity => res.json(updatedCity))
      .catch(err => res.status(400).json(err));
  }
};
