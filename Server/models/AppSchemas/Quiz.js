const { Schema, model } = require("mongoose");
const quizSchema = new Schema(
  {
    trainingId: {
      type: String,
      required: true,
    },
    questions: {
      type: [String], // linked to questions
    },
  },
  { timestamps: true }
);
const Quizmodel = model("Quiz", quizSchema);
module.exports = Quizmodel;
