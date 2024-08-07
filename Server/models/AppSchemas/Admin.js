const { Schema, model } = require("mongoose");
const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    followers: {
      type: [String],
      default: [],
    },
    followings: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
const modelAdmin = model("Admin", adminSchema);
module.exports = modelAdmin;
