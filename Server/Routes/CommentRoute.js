const { Router } = require("express");
const router = Router();
const {
  createComment,
  readAllCommentsOnChap,
} = require("../controllers/CommentController");
const authMiddleware = require("../middlewares/Authorize");
router.post("/newComment", authMiddleware, createComment);
router.get("/getAllCommentsOfChap/:chapId", readAllCommentsOnChap);
module.exports = router;
