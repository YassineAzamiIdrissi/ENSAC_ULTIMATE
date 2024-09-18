const { Schema, model } = require("mongoose");
const testimonalSchema = new Schema(
  {
    personName: {
      type: String,
      required: true,
    },
    personImg: {
      type: String,
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
