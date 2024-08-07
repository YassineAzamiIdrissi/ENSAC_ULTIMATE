const Professor = require("../models/AppSchemas/Professor");
const Student = require("../models/AppSchemas/Student");
const Admin = require("../models/AppSchemas/Admin");
const PostComment = require("../models/AppSchemas/PostComment");
const HttpError = require("../models/HttpError/ErrorModel");
const CommentReply = require("../models/AppSchemas/CommentReply");

exports.replyToComment = async (req, res, next) => {
  const { id, entity } = req.user;
  const { commentId } = req.params;
  const { content } = req.body;
  const userEntities = {
    professor: Professor,
    admin: Admin,
    student: Student,
  };
  try {
    const User = userEntities[entity];
    const concernedUser = await User.findById(id);
    const userName = concernedUser.firstName + " " + concernedUser.lastName;
    const picture = concernedUser.profilePicture;
    const concernedComment = await PostComment.findById(commentId);
    // adding a new commentReply :
    let commentReply;
    if (picture) {
      commentReply = await CommentReply.create({
        content,
        commentId,
        userId: id + " " + entity,
        userName,
      });
    } else {
      commentReply = await CommentReply.create({
        content,
        commentId,
        userId: id,
        userName,
        picture,
      });
    }
    const replyId = commentReply._id.toString();
    concernedComment.replies.push(replyId);
    concernedComment.save();
    res.status(201).json(concernedComment);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est arrivée à l'essaie de répondre à ce commentaire.."
      )
    );
  }
};
