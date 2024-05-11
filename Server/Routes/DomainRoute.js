const { Router } = require("express");
const router = Router();
const {
  getAllDomains,
  getAllCategories,
  getTrainingsByDomain,
  getCategoriesByAcademy,
} = require("../controllers/DomainController");
router.get("/getAllDomains", getAllDomains);
router.get("/getAllCategories", getAllCategories);
router.get("/getTrainingsByDomain/:domain", getTrainingsByDomain);
router.get("/getCatsByAcademy/:name", getCategoriesByAcademy);
module.exports = router;
