const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const dbConnect = require("./src/config/db");

app.use(bodyParser.json());

console.log(process.env.PORT);
let arr = [
  {
    id: 1,
    title: "aysun",
  },
  {
    id: 2,
    title: "sabina",
  },
];

app.get("/", (req, res) => {
  res.send("Users");
});

app.get("/users?/:id", (req, res) => {
  res.send(arr);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
