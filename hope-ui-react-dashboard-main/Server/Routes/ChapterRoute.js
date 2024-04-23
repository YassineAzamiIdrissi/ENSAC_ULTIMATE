const { Router } = require("express");
const router = Router();
const {
  addChapterToCourse,
  getChapter,
  getChaptersByCourse,
  deleteChapter,
  updateChapter,
  getTrainingIdFromChapterId,
} = require("../controllers/ChapterController");
router.post("/addChapterToCourse/:courseId", addChapterToCourse);
router.get("/getChapter/:chapterId", getChapter);
router.get("/getChapsByCourse/:courseId", getChaptersByCourse);
router.delete("/deleteSpecChapter/:chapterId", deleteChapter);
router.put("/updateChapter/:chapterId", updateChapter);
router.get("/getTrainingId/:chapterId", getTrainingIdFromChapterId);
module.exports = router;
