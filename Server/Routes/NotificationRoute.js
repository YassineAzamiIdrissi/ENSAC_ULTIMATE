const { Router } = require("express");
const {
  addNotification,
  getUserNotifications,
  markAllAsRead,
  getMyResps,
  markRespsAsRead,
} = require("../controllers/NotificationContorller");
const router = Router();
const authMiddleware = require("../middlewares/Authorize");
router.post("/newNotification", authMiddleware, addNotification);
router.get("/getUserNotifications", authMiddleware, getUserNotifications);
router.patch("/markRespsAsRead/:userId", markRespsAsRead);
router.get("/getResps", authMiddleware, getMyResps);
module.exports = router;
