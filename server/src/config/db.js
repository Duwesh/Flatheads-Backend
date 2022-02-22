const mongoose = require("mongoose");
require("dotenv").config()

const connect = () => {
  mongoose.connect(
    `mongodb+srv://jeevan:${process.env.Mongo_Passcode}@cluster0.2q58b.mongodb.net/${process.env.db}?retryWrites=true&w=majority`
  );
};

module.exports = connect;
