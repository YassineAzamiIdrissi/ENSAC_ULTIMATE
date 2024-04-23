const Notification = require("../models/AppSchemas/Notification");
const HttpError = require("../models/HttpError/ErrorModel");
exports.addNotification = async (req, res, next) => {
  const fromNotifier = req.user.id;
  const { toNotified, title, picture, content } = req.body;
  try {
    if (
      !toNotified.trim() ||
      !fromNotifier.trim() ||
      !title.trim() ||
      !picture.trim() ||
      !content.trim()
    ) {
      return next(new HttpError("La notif n'est pas compléte "));
    }
    const notification = Notification.create({
      toNotified,
      fromNotifier,
      title,
      picture,
      content,
    });
    res.status(201).json(notification);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getUserNotifications = async (req, res, next) => {
  const concernedUserId = req.user.id;
  try {
    const userNotifications = await Notification.find({
      toNotified: concernedUserId,
    });
    res.status(201).json(userNotifications);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.markAllAsRead = async (req, res, next) => {
  const id = req.user.id;
  try {
    await Notification.updateMany({ toNotified: id }, { read: true });
    res
      .status(201)
      .json("Toutes les notifications ont été marquées comme lues");
  } catch (err) {
    return next(new HttpError(err));
  }
};
