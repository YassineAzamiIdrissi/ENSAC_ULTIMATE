const Comment = require("../models/AppSchemas/Comment");
const Notification = require("../models/AppSchemas/Notification");
const Chapter = require("../models/AppSchemas/Chapter");
const Course = require("../models/AppSchemas/Course");
const Training = require("../models/AppSchemas/Training");
const Student = require("../models/AppSchemas/Student");
const HttpError = require("../models/HttpError/ErrorModel");
const Professor = require("../models/AppSchemas/Professor");
exports.createComment = async (req, res, next) => {
  const commentator = req.user.id;
  const { elementId, content, rating, entity } = req.body;
  try {
    const newComment = await Comment.create({
      elementId,
      content,
      commentator,
      rating,
      entity,
    });
    const concernedChapter = await Chapter.findById(elementId);
    const concernedCourse = await Course.findById(concernedChapter.courseId);
    const concernedTraining = await Training.findById(
      concernedCourse.trainingId
    );
    let concernedStudent;
    if (entity == "Student") {
      concernedStudent = await Student.findById(commentator);
    } else {
      concernedStudent = await Professor.findById(commentator);
    }
    const studentPic = concernedStudent.profilePicture;
    const notification = await Notification.create({
      toNotified: concernedTraining.providerProf,
      fromNotifier: commentator,
      title: "Nouveau commentaire",
      picture: studentPic,
      content: `${concernedStudent.firstName} ${concernedStudent.lastName}`,
      link: `/course/${concernedTraining._id}/chapter/${elementId}`,
    });
    res.status(201).json(newComment);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.readAllCommentsOnChap = async (req, res, next) => {
  const { chapId } = req.params;
  try {
    const allComments = await Comment.find({ elementId: chapId });
    let effectiveComments = [];
    for (let i = 0; i < allComments.length; ++i) {
      let concernedStudent;
      if (allComments[i].entity == "Student") {
        concernedStudent = await Student.findById(allComments[i].commentator);
      } else {
        concernedStudent = await Professor.findById(allComments[i].commentator);
      }
      const picture = concernedStudent.profilePicture;
      effectiveComments.push({
        picture,
        commentator:
          concernedStudent.firstName + " " + concernedStudent.lastName,
        content: allComments[i].content,
        rating: allComments[i].rating,
      });
    }
    res.status(201).json(effectiveComments);
  } catch (err) {
    return next(new HttpError(err));
  }
};
