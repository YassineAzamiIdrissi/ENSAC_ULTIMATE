const Question = require("../models/AppSchemas/Question");
const Quiz = require("../models/AppSchemas/Quiz");
const HttpError = require("../models/HttpError/ErrorModel");
exports.createQuestion = async (req, res, next) => {
  const { trainingId } = req.params;
  const { question, answers, correct } = req.body;
  try {
    const concernedQuiz = await Quiz.find({ trainingId });
    console.log(concernedQuiz);
    const quizId = concernedQuiz[0]._id;
    const newQuestion = await Question.create({
      quizId,
      question,
      answers,
      correct,
    });
    concernedQuiz[0].questions.push(newQuestion._id);
    concernedQuiz[0].save();
    res.status(201).json(newQuestion);
  } catch (err) {
    return next(new HttpError(err));
  }
};
