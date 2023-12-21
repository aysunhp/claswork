const Product = require("./../models/userModels");

const getAllProducts = async (req, res) => {
  let allProducts = await Product.find({});
  let filtered = allProducts;

  if (req.query.name) {
    filtered = filtered.filter((item) => item.name.includes(req.query.name));
  }

  if (req.query.price) {
    filtered = filtered.filter((item) => item.price == req.query.price);
  }

  if (req.query.name && req.query.price) {
    filtered = filtered.filter(
      (item) =>
        item.name.includes(req.query.name) || item.price == req.query.price
    );
  }
  res.send(filtered);
};

const getById = async (req, res) => {
  let allProducts = await Product.find({});
  let id = req.params.id;
  let found = allProducts.find((item) => item.id == req.params.id);
  res.send(found);
};

module.exports = { getAllProducts, getById };
