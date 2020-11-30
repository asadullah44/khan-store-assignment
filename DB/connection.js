const mongoose = require("mongoose");

const URI =
  "mongodb+srv://asad1234:asad182@asad1.ltaw1.mongodb.net/asad1?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connection done");
};

module.exports = connectDB;
