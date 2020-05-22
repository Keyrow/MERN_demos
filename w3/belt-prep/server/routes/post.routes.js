const postController = require("../controllers/post.controller");

module.exports = (app) => {
  // in python: path("api/posts", views.allPosts)
  app.get("/api/posts", postController.getAll);
  app.get("/api/posts/:id", postController.getOne);
  app.post("/api/posts", postController.create);
  app.put("/api/posts/:id", postController.update);
  app.put("/api/posts/:id/dislike", postController.dislike);
  app.delete("/api/posts/:id", postController.delete);
};
