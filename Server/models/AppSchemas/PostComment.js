const { Schema, model } = require("mongoose");
const PostComment = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
    replies: {
      type: [String],
      default: [],
    },
    modified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const postModel = model("PostComment", PostComment);
module.exports = postModel;
