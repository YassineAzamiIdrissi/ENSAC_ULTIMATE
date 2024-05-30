const { model, Schema } = require("mongoose");
const notificationSchema = new Schema(
  {
    toNotified: {
      type: String,
      required: true,
    },
    fromNotifier: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
const notificationModel = model("Notification", notificationSchema);
module.exports = notificationModel;
