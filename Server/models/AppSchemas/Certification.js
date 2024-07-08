const { Schema, model } = require("mongoose");
const certificationSchema = new Schema(
  {
    studentId: {
      type: String, // linked to Student...
      required: true,
    },
    trainingId: {
      type: String, // linked to Training...
      required: true,
    },
  },
  { timestamps: true }
);

const modelCertification = model("Certification", certificationSchema);
module.exports = modelCertification;
