const port = 8000;
const express = require("express");

const app = express();

// to be able to receive JSON
// without this, req.body is undefined
app.use(express.json());

app.get("/api/cities", (req, res) =>
  res.json({
    cities: [
      {
        id: 1,
        name: "Aogashima",
        population: 170
      },
      {
        id: 2,
        name: "Longyearbyen",
        population: 2144
      },
      {
        id: 3,
        name: "Kennedy Meadows",
        population: 28
      }
    ]
  })
);

app.post("/api/cities", (req, res) => {
  res.json({
    status: "success",
    city: req.body
  });
});

// :id is a route parameter, when the url is visited
// there should be an actual id passed in at that part of the url
app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);

  res.json({
    status: "success",
    // can access parameter values in route by the name we chose for the parameters
    // just like you name and use parameters in a function
    msg: `Deleted city id: ${req.params.id}`
  });
});

// update route
app.put("/api/cities/:id", (req, res) => {
  console.log(req.body);

  res.json({
    status: "success",
    msg: `Updated city id: ${req.params.id}`
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
