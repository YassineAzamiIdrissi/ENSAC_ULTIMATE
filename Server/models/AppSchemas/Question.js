const { Schema, model } = require("mongoose");
const questionSchema = new Schema(
  {
    quizId: {
      type: String, // linked to quiz
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
    },
    isCorrect: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const model = model("Question", questionSchema);
module.exports = model; 