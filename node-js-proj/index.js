const express = require("express");
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./src/routers/userRouter");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", userRouter);
app.get("/", (req, res) => {
  res.send(" Users");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
