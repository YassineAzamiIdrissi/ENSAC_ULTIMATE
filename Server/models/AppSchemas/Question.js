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
      type: [String],
      required: true,
    },
    correct: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Questionmodel = model("Question", questionSchema);
module.exports = Questionmodel;
