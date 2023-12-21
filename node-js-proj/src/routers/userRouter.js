const router = require("express").Router();
const userControllers = require("../controller/userControllers");

router.get("/users", userControllers.getAllUser);
router.post("/users", userControllers.postUser);
router.delete("/users/:id", userControllers.deletedUser);
router.get("/users/:id", userControllers.getUserById);

module.exports = router;
