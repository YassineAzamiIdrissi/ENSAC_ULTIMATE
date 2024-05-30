const Mark = require("../models/AppSchemas/Mark");
const HttpError = require("../models/HttpError/ErrorModel");
exports.defineMark = async (req, res, next) => {
  const { mark, quizId, studentId } = req.body;
  try {
    const newMark = await Mark.create({ mark, quizId, studentId });
    res.status(201).json(newMark);
  } catch (err) {
    return next(new HttpError(err));
  }
};
