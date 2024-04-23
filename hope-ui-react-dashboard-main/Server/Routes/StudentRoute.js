const { Router } = require("express");
const {
  registerStudent,
  loginStudent,
  getStudent,
  editStudent,
} = require("../controllers/StudentController");
const authMiddleware = require("../middlewares/Authorize");
const router = Router();
router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/get/:id", getStudent);
router.put("/edit", authMiddleware, editStudent);
module.exports = router;
