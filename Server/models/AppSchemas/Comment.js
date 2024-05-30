const { model, Schema } = require("mongoose");
const commentSchema = new Schema(
  {
    commentator: {
      type: String,
      required: true,
    },
    entity: {
      type: String,
      required: true,
    },
    elementId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const commentModel = model("Comment", commentSchema);
module.exports = commentModel;
