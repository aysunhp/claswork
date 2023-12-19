const router = require("express").Router();
const productControllers = require("./../controller/userControllers");

router.get("/products", productControllers.getAllProducts);

router.get("/products/:id", productControllers.getById);
// router.post("/products", productControllers.postUser);

module.exports = router;
