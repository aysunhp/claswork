const express = require("express");
require("dotenv").config();
require("./src/config/db");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const productRouter = require("./src/router/productRouter");

app.use(bodyParser.json());
app.use("/", productRouter);

app.get("/", (req, res) => {
  res.send("Products");
});

// app.get("/products", (req, res) => {
//   let filtered = data.products;

//   if (req.query.name) {
//     filtered = filtered.filter((item) => item.name.includes(req.query.name));
//   }

//   if (req.query.price) {
//     filtered = filtered.filter((item) => item.price == req.query.price);
//   }

//   if (req.query.name && req.query.price) {
//     filtered = filtered.filter(
//       (item) =>
//         item.name.includes(req.query.name) || item.price == req.query.price
//     );
//   }

//   res.send(filtered);
// });

// app.get("/products/:id", (req, res) => {
//   element = data.products.find((item) => item.id == req.params.id);
//   res.send(element);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
