const { Router } = require("express");
const router = Router();
const { defineMark } = require("../controllers/MarkController");
router.post("/defineMark", defineMark);

module.exports = router;
