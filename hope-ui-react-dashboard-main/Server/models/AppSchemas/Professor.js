const { Schema, model } = require("mongoose");
const profSchema = new Schema(
  {
    description: {
      type: String,
    },
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
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    socialAccounts: {
      type: [String],
      default: [],
      // {
      //   name: { type: String },
      //   url: { type: String },
      // }
    },
    worksFor: {
      type: [String], // linked to Academy
      default: [],
    },
    isResponsable: {
      type: Boolean,
      default: false,
    },
    responsableFor: {
      type: String, // linked to Academy
    },
    trainingsList: {
      type: [String], // linked to Training
      default: [],
    },
  },
  { timestamps: true }
);
const ProfessorModel = model("Professor", profSchema);
module.exports = ProfessorModel;
