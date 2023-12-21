const User = require("../models/userModul");

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};

const postUser = async (req, res) => {
  // // let findUser = await User.findOne({ id: req.body.id });
  // if (findUser) {
  //   res.send("This id exist");
  // } else {
  const newUser = new User(req.body);
  newUser.save();
  // }
};

const getUserById = async (req, res) => {
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  res.send(findUser);
};

const deletedUser = async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let findUser = await User.findOne({ id: id });
  console.log(findUser);
  // let _id = findUser._id;
  // let deleteUser1 = await User.findByIdAndDelete(_id);
};

module.exports = { postUser, getAllUser, getUserById, deletedUser };
