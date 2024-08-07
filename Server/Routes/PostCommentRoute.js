const { Router } = require("express");
const authorize = require("../middlewares/Authorize");
const router = Router();
const {
  deleteComment,
  updateComment,
} = require("../controllers/PostCommentController");

router.delete("/remove/:commentId", authorize, deleteComment);
router.put("/update/:commentId", authorize, updateComment);

module.exports = router;
