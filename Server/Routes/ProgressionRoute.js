const { Router } = require("express");
const {
  getSpecProgression,
  getProgressionInMyTrainings,
  updateProgression,
  getComChaps,
} = require("../controllers/ProgressionController");
const authMiddleware = require("../middlewares/Authorize");
const router = Router();
router.get("/getSpecProgression/:trainingId/:studentId", getSpecProgression);
router.get(
  "/getProgressionInMyTrainings",
  authMiddleware,
  getProgressionInMyTrainings
);
router.patch(
  "/updateProgression/:studentId/:trainingId/:step/:nextChap/:thisChap",
  updateProgression
);
router.get("/getComChaps/:studentId/:trainingId", getComChaps);
module.exports = router;
