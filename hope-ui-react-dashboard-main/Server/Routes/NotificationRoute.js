const { Router } = require("express");
const {
  addNotification,
  getUserNotifications,
  markAllAsRead,
} = require("../controllers/NotificationContorller");
const router = Router();
const authMiddleware = require("../middlewares/Authorize");
router.post("/newNotification", authMiddleware, addNotification);
router.get("/getUserNotifications", authMiddleware, getUserNotifications);
router.patch("/markAllRead", authMiddleware, markAllAsRead);
module.exports = router;
