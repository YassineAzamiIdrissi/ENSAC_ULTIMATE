const { Router } = require("express");
const router = Router();
const { addNewTestimonial } = require("../controllers/TestimonialController");
const authorize = require("../middlewares/Authorize");

router.post("/newTestimonial", authorize, addNewTestimonial);

module.exports = router;
