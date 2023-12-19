const router = require("express").Router()
const userControllers = require("../controller/userControllers")

router.post("/users", userControllers.postUser);
router.get("/users", userControllers.getAllUser);

module.exports = router;