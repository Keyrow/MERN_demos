const cityController = require("../controllers/city.controller");

module.exports = (app) => {
  // in python: path("api/cities", views.allCities)
  app.get("/api/cities", cityController.getAll);
  app.get("/api/cities/:id", cityController.getOne);
  app.post("/api/cities", cityController.create);
  app.put("/api/cities/:id", cityController.update);
  app.delete("/api/cities/:id", cityController.delete);
};
