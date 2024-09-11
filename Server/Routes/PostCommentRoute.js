const { Router } = require("express");
const authorize = require("../middlewares/Authorize");
const router = Router();
const {
  deleteComment,
  updateComment,
  createPostComment,
} = require("../controllers/PostCommentController");

// Route pour créer un commentaire
router.post("/create", authorize, createPostComment);

// Route pour supprimer un commentaire
router.delete("/remove/:commentId", authorize, deleteComment);

// Route pour mettre à jour un commentaire
router.put("/update/:commentId", authorize, updateComment);
module.exports = router;
