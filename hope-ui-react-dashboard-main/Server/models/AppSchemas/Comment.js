const { model, Schema } = require("mongoose");
const commentSchema = new Schema(
  {
    studentId: {
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
  },
  { timestamps: true }
);
const model = model("Comment", commentSchema);
module.exports = model;
