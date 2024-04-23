const { Router } = require("express");
const router = Router();
const {
  deleteEnrollment,
  getAllEnrolls,
  getNotifEnrolls,
  readOwnDemands,
  getNonAnsweredDemands,
} = require("../controllers/EnrollmentController");
const authMiddleware = require("../middlewares/Authorize");
router.delete("/deleteEnrollment/:id", deleteEnrollment);
router.get("/getAll", getAllEnrolls);
router.get("/getNotifEnrolls", authMiddleware, getNotifEnrolls);
router.patch("/readDemands/:currentProfId", readOwnDemands);
router.get("/demandsToAnswer", authMiddleware, getNonAnsweredDemands);
module.exports = router;
