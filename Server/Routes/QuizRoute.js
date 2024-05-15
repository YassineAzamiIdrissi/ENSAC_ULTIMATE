const { Router } = require("express");
const {
  createQuiz,
  trainingQuizCreated,
  returnQuestions,
  getQuizCorrectAnswers,
} = require("../controllers/QuizController");
const authMiddleware = require("../middlewares/Authorize");
const router = Router();
router.post("/createQuiz/:trainingId", createQuiz);
router.get("/trainingQuizCreated/:trainingId", trainingQuizCreated);
router.get("/returnQuestions/:trainingId", returnQuestions);
router.get("/getQuizCorrectAnswers/:trainingId", getQuizCorrectAnswers);
module.exports = router;
