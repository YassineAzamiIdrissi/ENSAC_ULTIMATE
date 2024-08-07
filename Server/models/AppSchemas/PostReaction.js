const { Schema, model } = require("mongoose");
const PostReaction = new Schema({
  reaction: {
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
});
const postReactionModel = model("PostReaction", PostReaction);
module.exports = postReactionModel;
