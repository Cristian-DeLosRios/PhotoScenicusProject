const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  location: {
    city: { type: String },
    state: { type: String },
  },
  photos: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
