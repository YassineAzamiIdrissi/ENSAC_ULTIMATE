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
      console.log("MISSING FIELDS ZONE : ");
      console.log(toNotified);
      console.log(fromNotifier);
      console.log(title);
      console.log(picture);
      console.log(content);
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
exports.markRespsAsRead = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const userNotifications = await Notification.find({ toNotified: id });
    for (let i = 0; i < userNotifications.length; ++i) {
      // . . . . . 
      userNotifications[i].read = true;
      userNotifications[i].save();
    }
    res.status(201).json([]);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getMyResps = async (req, res, next) => {
  const currentStudentId = req.user.id;
  try {
    const concernedNotifications = await Notification.find({
      toNotified: currentStudentId,
    });
    const unreadRealOnes = concernedNotifications.filter(
      (notif) => notif.read == false
    );
    res.status(201).json(unreadRealOnes);
  } catch (err) {
    return next(new HttpError(err));
  }
};
