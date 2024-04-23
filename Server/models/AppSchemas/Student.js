const { Schema, model } = require("mongoose");
const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cycle: {
      type: String,
    },
    branch: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
    profilePicture: {
      type: String,
    },
    socialAccounts: {
      type: [String],
      default: [],
    },
    academies: {
      type: [String],
      default: [],
    },
    enrollments: {
      type: [String], // linked to Enrollemnts
      default: [],
    },
    followedTrainings: {
      type: [String], // linked to Training
      default: [],
    },
    certifications: {
      type: [String], // linked to Certification
      default: [],
    },
  },
  { timestamps: true }
);
module.exports = model("Student", studentSchema);
