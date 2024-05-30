const { Router } = require("express");
const {
  loginProfessor,
  getProfessor,
  editProfessor,
  getAllProfs,
  getEmployerAcademies,
  acceptSubscription,
  getUnreadDemands,
  acceptEnroll,
  refuseEnroll,
  getAllProfessorsInAcademy,
  excludeStudent,
  excludeProfessor,
} = require("../controllers/ProfessorController");
const authMiddleware = require("../middlewares/Authorize");
const router = Router();
router.post("/login", loginProfessor);
router.get("/get/:id", getProfessor);
router.get("/getEmpAcademies", authMiddleware, getEmployerAcademies);
router.get("/getAllProfs", getAllProfs);
router.put("/edit", authMiddleware, editProfessor);
router.patch("/acceptSubs/:id", authMiddleware, acceptSubscription);
router.get("/getDemands", getUnreadDemands);
router.patch("/acceptEnroll/:idEnroll", acceptEnroll);
router.patch("/refuseEnroll/:idEnroll", refuseEnroll);
router.get(
  "/getAllProfessorsInAcademy",
  authMiddleware,
  getAllProfessorsInAcademy
);
router.patch("/excludeStudent/:studentId/:respId", excludeStudent);
router.patch("/excludeProfessor/:profId/:respId", excludeProfessor);
module.exports = router;
