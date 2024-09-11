const { Router } = require("express");
const router = Router();
const authorize = require("../middlewares/Authorize");
const {
  addNewPost,
  updatePost,
  deletePost,
  getAllMyPosts,
  getPostsOfUser,
  getTimeLine,
  commentPost,
  reactToPost,
  getAllPosts,
} = require("../controllers/PostController");

router.get("/posts/:userId", getPostsOfUser);
router.get("/allposts", getAllPosts);
router.get("/myPosts", authorize, getAllMyPosts);
router.post("/newPost", addNewPost);
// router.post("/newPost", authorize, addNewPost);
router.put("/update/:postId", authorize, updatePost);
router.delete("/post/:postId", authorize, deletePost);
router.get("/timeline", authorize, getTimeLine);
router.post("/comment/:postId", authorize, commentPost);
router.post("/react/:postId", authorize, reactToPost);
module.exports = router;
