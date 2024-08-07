const { Schema, model } = require("mongoose");
const replySchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  commentId: {
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

const commentReplyModel = model("commentReply", replySchema);
module.exports = commentReplyModel;
