const router = require("express").Router();
const { Teacher, Student, Goals } = require("../../models");

router.get("/", async (req, res) => {
  let teachers = await Teacher.findAll();

  teachers = teachers.map((teacher) => teacher.get({ plain: true }));
  res.send(teachers);
});

module.exports = router;
