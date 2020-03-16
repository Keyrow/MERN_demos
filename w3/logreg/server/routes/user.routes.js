const userController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");
// export a function to be called and passed the app
module.exports = app => {
  // this route now has to be authenticated
  app.get("/api/users", authenticate, userController.getAll);
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
  app.post("/api/logout", userController.logout);
};
