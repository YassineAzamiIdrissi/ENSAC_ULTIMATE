const { Schema, model } = require("mongoose");
const courseSchema = new Schema(
  {
    trainingId: {
      type: String, // linked to training..
      required: true,
    },
    QuizId: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    chapters: {
      type: [String],
    },
  },
  { timestamps: true }
);
const CourseModel = model("Course", courseSchema);
module.exports = CourseModel;
