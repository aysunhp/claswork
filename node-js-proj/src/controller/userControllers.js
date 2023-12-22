const User = require("../models/userModul");

const getAllUser = async (req, res) => {
  let allUsers = await User.find({});
  res.send(allUsers);
};

const postUser = async (req, res) => {
  let found = await User.findOne({ id: req.body.id });
  if (found) {
    console.log("This id exist");
  } else {
    let newUser = new User(req.body);
    newUser.save();
  }
};

const getUserById = async (req, res) => {
  let found = await User.findOne({ id: req.params.id });
  res.send(found);
};

const deleteUser = async (req, res) => {
  let found = await User.findOne({ id: req.params.id });
  let _id = found._id;
  let deleted = await User.findByIdAndDelete(_id);
};

const updatedUser = async (req, res) => {
  let updated = User.findOneAndUpdate({ id: req.params.id }, req.body);
};

const putUser = async (req, res) => {
  let updated = User.replaceOne({ id: req.params.id }, req.body);
};
module.exports = { postUser, getAllUser, getUserById, deleteUser };
