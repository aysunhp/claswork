const mongoose = require("moongose");

const userSchema = mongoose.Schema({
  title: String,
  content: String,
});

const User = mongoose.model("User", schema);
module.exports = User;
