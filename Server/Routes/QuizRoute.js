const { Router } = require("express");
const {
  createQuiz,
  trainingQuizCreated,
  returnQuestions,
  getQuizCorrectAnswers,
  getQuizFromTrainingId,
} = require("../controllers/QuizController");
const authMiddleware = require("../middlewares/Authorize");
const router = Router();
router.post("/createQuiz/:trainingId", createQuiz);
router.get("/trainingQuizCreated/:trainingId", trainingQuizCreated);
router.get("/returnQuestions/:trainingId", returnQuestions);
router.get("/getQuizCorrectAnswers/:trainingId", getQuizCorrectAnswers);
router.get("/getQuizFromTrainingId/:trainingId", getQuizFromTrainingId);
module.exports = router;
