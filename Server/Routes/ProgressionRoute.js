const { Router } = require("express");
const { getSpecProgression } = require("../controllers/ProgressionController");
const router = Router();
router.get("/getSpecProgression/:trainingId/:studentId", getSpecProgression);
module.exports = router;
