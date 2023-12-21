const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => {
    console.log("Failed", err);
  });
