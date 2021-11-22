const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: String,
    email: String,
    location: {
      city: { type: String },
      state: { type: String },
    },
    photos: [String],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
