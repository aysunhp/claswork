const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    name: String,
    discountPercentage: String,
    price: String,
    salePrice: String,
  },
  { collection: "Products", timestamps: true }
);

const Product = mongoose.model("Products", productsSchema);

module.exports = Product;
