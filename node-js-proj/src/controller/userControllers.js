const User = require("../models/userModul");

const postUser = (req, res) => {
  console.log(req.body);
};

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  console.log(allUser);
  res.send(allUser);
};

module.exports = { postUser, getAllUser };
