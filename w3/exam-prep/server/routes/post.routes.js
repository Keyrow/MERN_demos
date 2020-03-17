const postController = require("../controllers/post.controller");

// export a function to be called and passed the app
module.exports = app => {
  app.get("/api/posts", postController.getAll);

  app.get("/api/posts/:id", postController.getOne);

  app.post("/api/posts", postController.create);

  app.put("/api/posts/:id", postController.update);

  app.delete("/api/posts/:id", postController.delete);
};
