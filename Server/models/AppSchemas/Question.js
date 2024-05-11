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
    answers: {
      type: String,
      required: true,
    },
    Correct: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const model = model("Question", questionSchema);
module.exports = model;
