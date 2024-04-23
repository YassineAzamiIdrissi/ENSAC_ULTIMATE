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
} = require("../controllers/AdminController");
router.post("/newDomain", addDomain);
router.post("/newCategory", addCategory);
router.patch("/updRespo", changeProfResponsability);
router.post("/newProfessor", addProfessor);
router.patch("/profWorksFor/:id", defineProfAsWorker);
router.patch("/profIsRespFor/:id", defineProfAsResponsable);
router.patch("/undefineRespo",undefineResponsable); 
router.patch("/undefineWorker",undefineWorker);  
module.exports = router;
