const router = require("express").Router();
const { Teacher, Student, Goal, Role } = require("../../models");

router.get("/", async (req, res) => {
  let teachers = await Teacher.findAll({
    attributes: {
      exclude: ["password"],
    },
    include: [{ model: Role }],
  });

  teachers = teachers.map((teacher) => teacher.get({ plain: true }));
  res.send(teachers);
});

module.exports = router;
