const router = require("express").Router();
const { Teacher, Student, Goal, Role } = require("../models");

router.use("/", (req, res) => {
  res.render("home");
});

module.exports = router;
