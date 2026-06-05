const express = require("express");

const router = express.Router();

const auth =
require("../middleware/authMiddleware");

const {
  createCourse,
  getCourses
} =
require("../controllers/courseController");

router.post("/", auth, createCourse);

router.get("/", getCourses);

module.exports = router;