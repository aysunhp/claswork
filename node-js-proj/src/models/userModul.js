const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: String,
    name: String,
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
