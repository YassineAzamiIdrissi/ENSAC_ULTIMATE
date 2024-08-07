const PostComment = require("../models/AppSchemas/PostComment");
const Post = require("../models/AppSchemas/Post");
const HttpError = require("../models/HttpError/ErrorModel");

exports.deleteComment = async (req, res, next) => {
  const { id, entity } = req.user;
  const { commentId } = req.params;
  try {
    const concernedComment = await PostComment.findById(commentId);
    const postId = concernedComment.postId;
    const userId = concernedComment.userId.split(" ")[0];
    if (userId != id) {
      return next(
        new HttpError(
          "Attention, vous ne pouvez pas supprimer un commentaire qui ne vous appartient pas !",
          403
        )
      );
    }
    const concernedPost = await Post.findById(postId);
    await PostComment.findByIdAndDelete(commentId);

    const index = concernedPost.comments.indexOf(commentId);
    concernedPost.comments.splice(index, 1);
    concernedPost.save();
    res.status(200).json(concernedPost);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est survenue à l'essaie de supprimer ce commentaire.."
      )
    );
  }
};
exports.updateComment = async (req, res, next) => {
  const { id, entity } = req.user;
  const { commentId } = req.params;
  const { newContent } = req.body;
  try {
    const concernedComment = await PostComment.findById(commentId);
    const userId = concernedComment.userId.split(" ")[0];
    if (userId != id) {
      return next(
        new HttpError(
          "Attention, vous ne pouvez pas modifier un commentaire qui ne vous apprtient pas !",
          400
        )
      );
    }
    const newPostComment = await PostComment.findByIdAndUpdate(
      commentId,
      { content: newContent, save: true },
      { new: true }
    );

    const concernedPost = await Post.findById(newPostComment.postId);
    const retObject = {
      ...concernedPost,
      postComments: concernedPost.comments,
    };
    res.status(200).json(retObject);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est arrivée à l'essaie de modifier ce commentaire"
      )
    );
  }
};
