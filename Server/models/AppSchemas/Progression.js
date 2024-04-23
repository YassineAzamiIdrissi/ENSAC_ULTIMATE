const { model, Schema } = require("mongoose");
const ProgressioSchema = new Schema({
  studentId: {
    type: String,
    required: true,
  },
  trainingId: {
    type: String,
    required: true,
  },
  stopChap: {
    type: String,
    required: true,
  },
  progression: {
    type: Number,
    required: true,
  },
});
const progModel = model("Progression", ProgressioSchema);
module.exports = progModel;
