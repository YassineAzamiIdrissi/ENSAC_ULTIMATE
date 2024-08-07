const { Router } = require("express");
const authorize = require("../middlewares/Authorize");
const router = Router();
const {
  followUser,
  unfollowUser,
} = require("../controllers/generalController");

router.patch("/follow/:toBeFollowed", authorize, followUser);
router.patch("/unfollow/:toBeUnfollowed", authorize, unfollowUser);

module.exports = router;
