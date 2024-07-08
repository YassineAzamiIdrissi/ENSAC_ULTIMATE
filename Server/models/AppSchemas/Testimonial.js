const { Schema, model } = require("mongoose");
const testimonalSchema = new Schema(
  {
    personName: {
      type: String,
      required: true,
    },
    personImg: {
      type: String,
      required: true,
    },
    personPos: {
      type: String,
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const testimonialModel = model("Testimonal", testimonalSchema);
module.exports = testimonialModel;
