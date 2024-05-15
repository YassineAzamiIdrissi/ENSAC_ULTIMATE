const { Router } = require("express");
const router = Router();
const { createQuestion } = require("../controllers/QuestionController");

router.post("/newQuestion/:trainingId", createQuestion);
module.exports = router;
