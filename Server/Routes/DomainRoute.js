const { Router } = require("express");
const router = Router();
const {
  getAllDomains,
  getAllCategories,
  getTrainingsByDomain,
  getCategoriesByAcademy,
} = require("../controllers/DomainController");
const {
  getDomainNameById,
} = require("../../hope-ui-react-dashboard-main/Server/controllers/DomainController");
router.get("/getAllDomains", getAllDomains);
router.get("/getAllCategories", getAllCategories);
router.get("/getTrainingsByDomain/:domain", getTrainingsByDomain);
router.get("/getCatsByAcademy/:name", getCategoriesByAcademy);
router.get("/getDomainName/:id", getDomainNameById);
module.exports = router;
