
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected mongoDB")
}).catch((err) => {
    console.log("failed", err)
});

