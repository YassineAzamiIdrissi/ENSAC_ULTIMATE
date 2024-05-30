const { Router } = require("express");
const {
  newCertif,
  getAllMyCertifs,
} = require("../controllers/CertificationController");
const authorize = require("../middlewares/Authorize");
const router = Router();
router.post("/newCertification", newCertif);
router.get("/getMyCertifs", authorize, getAllMyCertifs);
module.exports = router;
