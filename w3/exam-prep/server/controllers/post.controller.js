const Post = require("../models/post.model");

// export an object that is full of methods
module.exports = {
  getAll(_req, res) {
    Post.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json(err));
  },

  getOne(req, res) {
    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(400).json(err));
  },

  create(req, res) {
    Post.create(req.body)
      .then(newPost => res.json(newPost))
      .catch(err => res.status(400).json(err));
  },

  update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(updatedPost => res.json(updatedPost))
      .catch(err => res.status(400).json(err));
  },

  delete(req, res) {
    Post.findByIdAndDelete(req.params.id)
      .then(post => res.json(post))
      .catch(err => res.status(400).json(err));
  }
};
