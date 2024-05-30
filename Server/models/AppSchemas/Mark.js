const { model, Schema } = require("mongoose");
const markSchema = new Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    quizId: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const markModel = model("Mark", markSchema);
module.exports = markModel;
