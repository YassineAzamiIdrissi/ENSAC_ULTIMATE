const { Schema, model } = require("mongoose");
const quizSchema = new Schema(
  {
    trainingId: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,
      default: 0,
      max: 20,
    },
    questions: {
      type: [String], // linked to questions
    },
  },
  { timestamps: true }
);
const Quizmodel = model("Quiz", quizSchema);
module.exports = Quizmodel;
