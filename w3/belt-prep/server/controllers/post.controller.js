const Post = require("../models/post.model");

// export an OBJECT that is full of methods
module.exports = {
  // long-form key: value format
  create: function (req, res) {
    Post.create(req.body)
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    Post.find()
      .then((cities) => {
        res.json(cities);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    // console.log(req);
    Post.findById(req.params.id)
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    Post.findByIdAndDelete(req.params.id)
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
