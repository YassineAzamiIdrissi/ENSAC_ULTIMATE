const { Router } = require("express");
const router = Router();
const {
  addDomain,
  addProfessor,
  changeProfResponsability,
  addCategory,
  defineProfAsWorker,
  defineProfAsResponsable,
  undefineResponsable,
  undefineWorker,
  addProgression,
} = require("../controllers/AdminController");
router.post("/newDomain", addDomain);
router.post("/newCategory", addCategory);
router.patch("/updRespo", changeProfResponsability);
router.post("/newProfessor", addProfessor);
router.patch("/profWorksFor/:id", defineProfAsWorker);
router.patch("/profIsRespFor/:id", defineProfAsResponsable);
router.patch("/undefineRespo", undefineResponsable);
router.patch("/undefineWorker", undefineWorker);
router.post("/newProgression/:trainingId", addProgression);
module.exports = router;
