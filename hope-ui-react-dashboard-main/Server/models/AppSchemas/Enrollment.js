const { Schema, model, model } = require("mongoose");
const enrollementSchema = new Schema(
  {
    studentId: {
      type: String, // linked to Student
      required: true,
    },
    trainingId: {
      type: String,
      required: true,
    },
    decision: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// think to add the id of the training responsable to facilitate the code..
const model = model("Enrollment", enrollementSchema);
module.exports = model;
