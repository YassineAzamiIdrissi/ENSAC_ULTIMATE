const { Router } = require("express");
const router = Router();
const {
  addTraining,
  getTraining,
  getAllTrainings,
  addToAcademyTraining,
  freeTrainingsFromAcademy,
  getRoomFromTraining,
  getTrainingsByProf,
  deleteTraining,
  updateTraining,
  getNotRegisteredTrainings,
  unfollowTraining,
  getAllChaptersFromTrainingId,
  getFirstChapFromTraining,
  getLastChapterId,
} = require("../controllers/TrainingController");
const authMiddleware = require("../middlewares/Authorize");
router.post("/addTraining", authMiddleware, addTraining);
router.get("/getTraining/:id", getTraining);
router.get("/getRoom/:trainingId", getRoomFromTraining);
router.get("/getAllTrainings", getAllTrainings);
router.get("/getWrittenTrainings", authMiddleware, getTrainingsByProf);
router.patch("/addToAcademyTraining/:academyId", addToAcademyTraining);
router.patch("/freeTrainings/:academyId", freeTrainingsFromAcademy);
router.delete("/deleteTraining/:trainingId", deleteTraining);
router.put("/updateSpecTraining/:trainingId", updateTraining);
router.get(
  "/getTrainingsForStudent",
  authMiddleware,
  getNotRegisteredTrainings
);
router.patch("/unfollowTraining/:trainingId", unfollowTraining);
router.get("/chapsFromTraining/:trainingId", getAllChaptersFromTrainingId);
router.get("/getFirstChapFromTraining/:trainingId", getFirstChapFromTraining);
router.get("/getLastChapterId/:trainingId", getLastChapterId);
module.exports = router;
