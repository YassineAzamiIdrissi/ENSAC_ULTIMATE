const { Schema, model } = require("mongoose");
const trainingSchema = new Schema(
  {
    academyId: {
      type: String,
      required: true,
    },
    providerProf: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    subscribers: {
      type: [String], // linked to Student
    },
    courses: {
      type: [String], // linked to Course
    },
    subtitle: {
      type: [String],
    },
    description: {
      type: [String],
    },
  },
  { timestamps: true }
);
const modelTraining = model("Training", trainingSchema);
module.exports = modelTraining;
//Enrollement : a Schema to define...
