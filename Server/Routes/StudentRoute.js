const { Router } = require("express");
const {
  registerStudent,
  loginStudent,
  getStudent,
  editStudent,
  sendDemand,
  getCurrentStudentFollowedTrainings,
  getStudentsInTheAcademy,
} = require("../controllers/StudentController");
const authMiddleware = require("../middlewares/Authorize");
const router = Router();
router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/get/:id", getStudent);
router.put("/edit", authMiddleware, editStudent);
router.post("/sendDemand/:trainingId", sendDemand);
router.get(
  "/getFollowedTrainings",
  authMiddleware,
  getCurrentStudentFollowedTrainings
);
router.get("/getStudentsInTheAcademy", authMiddleware, getStudentsInTheAcademy);

module.exports = router;
