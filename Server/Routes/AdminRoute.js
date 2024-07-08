const { Router } = require("express");
const authMiddleware = require("../middlewares/Authorize");
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
  addTestiMonial,
  getAllTestimonials,
  newAdmin,
  loginAdmin,
  getAdmin,
  editAdminInfo,
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
router.post("/testimonials", addTestiMonial);
router.get("/getTests", getAllTestimonials);
router.post("/newAdmin", newAdmin);
router.post("/loginAdmin", loginAdmin);
router.get("/get/:id", getAdmin);
router.put("/edit", authMiddleware, editAdminInfo);
module.exports = router;
