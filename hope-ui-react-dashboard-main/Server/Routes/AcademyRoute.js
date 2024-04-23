const { Router } = require("express");
const router = Router();
const {
  addAcademy,
  getAcademy,
  getAllAcademies,
  getAcademyIdByName,
  getAcademyByOneTrainingId,
} = require("../controllers/AcademyController");

router.post("/addAcademy", addAcademy);
router.get("/get/:id", getAcademy);
router.get("/getAll", getAllAcademies);
router.get("/getAcademyId/:name", getAcademyIdByName);
router.get("/academyNameByOneTraining/:trainingId", getAcademyByOneTrainingId);
module.exports = router;
