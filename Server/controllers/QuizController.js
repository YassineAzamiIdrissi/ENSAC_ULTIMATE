const Quiz = require("../models/AppSchemas/Quiz");
const Question = require("../models/AppSchemas/Question");
const HttpError = require("../models/HttpError/ErrorModel");
exports.createQuiz = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const newQuiz = await Quiz.create({ trainingId });
    res.status(201).json(newQuiz);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.trainingQuizCreated = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const test = await Quiz.find({ trainingId });
    const resp = test.length ? "oui" : "non";
    res.status(201).json(resp);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.returnQuestions = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const concerendQuiz = await Quiz.find({ trainingId });
    console.log(concerendQuiz);
    if (!concerendQuiz.length) {
      return next(new HttpError("Pas de quiz pour cette formation"));
    }
    const quizQuestions = concerendQuiz[0].questions;
    let lista = [];
    for (let i = 0; i < quizQuestions.length; ++i) {
      const concernedQuestion = await Question.findById(quizQuestions[i]);
      const questionObject = {
        question: concernedQuestion.question,
        answers: concernedQuestion.answers,
        correct: concernedQuestion.correct,
      };
      lista.push(questionObject);
    }
    res.status(201).json(lista);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getQuizCorrectAnswers = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const concernedQuiz = await Quiz.find({ trainingId });
    const quiz = concernedQuiz[0];
    let correctAnswers = [];
    for (let i = 0; i < quiz.questions.length; i++) {
      const concernedQuestion = await Question.findById(quiz.questions[i]);
      correctAnswers.push(concernedQuestion.correct);
    }
    res.status(201).json(correctAnswers);
  } catch (err) {
    return next(new HttpError(err));
  }
};
