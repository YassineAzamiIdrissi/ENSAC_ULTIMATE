const { Schema, model } = require("mongoose");
const domainSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
    },
  },
  { timestamps: true }
);

const domainModel = model("Domain", domainSchema);
module.exports = domainModel;
