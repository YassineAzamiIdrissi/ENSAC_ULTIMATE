const { Schema, model } = require("mongoose");
const Post = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    reactions: {
      type: [String],
      default: [],
    },
    comments: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
const postModel = model("Post", Post);
module.exports = postModel;
