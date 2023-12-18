const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected mongoDB");
  })
  .catch((err) => {
    console.log("failed" + err);
  });
// const  dbConnect =async()=>{
//     await mongoose.connect(process.env.MONGODB_URL);
//  }

//  module.exports = dbConnect;
