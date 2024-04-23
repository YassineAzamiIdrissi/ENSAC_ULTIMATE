const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middlewares/Authorize");
const {
  addCourseToTraining,
  getCourse,
  getCoursesByTraining,
  deleteCourse,
  updateCourse,
} = require("../controllers/CourseController");
router.post("/newCourse/:trainingId", authMiddleware, addCourseToTraining);
router.get("/getCourse/:courseId", getCourse);
router.get("/getCoursesByTraining/:trainingId", getCoursesByTraining);
router.delete("/deleteCourse/:courseId", authMiddleware, deleteCourse);
router.put("/updateCourse/:courseId", updateCourse);
module.exports = router;
