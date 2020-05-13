const port = 8000;
const express = require("express");

const app = express();

// So our app can receive json: WITHOUT THIS req.body WILL BE UNDEFINED
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.get("/api/cities", (req, res) => {
  res.json({
    cities: [
      {
        id: 1,
        name: "Aogashima",
        population: 170,
      },
      {
        id: 2,
        name: "Longyearbyen",
        population: 2144,
      },
      {
        id: 3,
        name: "Kennedy Meadows",
        population: 28,
      },
    ],
  });
});

app.get("/api/cities/:id", (req, res) => {
  res.json({
    city: {
      id: req.params.id,
    },
  });
});

app.post("/api/cities", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    city: req.body,
  });
});

app.put("/api/cities/:id", (req, res) => {
  console.log(req.body);

  res.json({
    status: "success",
    msg: `Updated city id: ${req.params.id}`,
  });
});

// :routeParamName
app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);
  console.log(typeof req.params.id);

  res.json({
    status: "success",
    msg: `Deleted city id: ${req.params.id}`,
  });
});

app.listen(port, () => {
  console.log(
    `Listening on port ${port} for requests that need to be responded to.`
  );
});
