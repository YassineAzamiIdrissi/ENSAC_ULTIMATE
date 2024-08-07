const { Router } = require("express");
const router = Router();
const authorize = require("../middlewares/Authorize");
const { replyToComment } = require("../controllers/CommentReplyController");

router.post("/reply/:commentId", authorize, replyToComment);


module.exports = router;
