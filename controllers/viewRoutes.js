const router = require("express").Router();
const { Teacher, Student, Goal, Role } = require("../models");
const { authenticate } = require("../utils/middleware/auth");

router.get("/", async (req, res) => {
  console.log(req.session);
  if (req.session.logged_in) {
    let teacher = await Teacher.findByPk(req.session.teacher_id, {
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: Student,
          exclude: ["teacher_id", "TeacherStudent"],
          include: [{ model: Goal }],
        },
      ],
    });
    teacher = teacher.get({ plain: true });
    res.render("profile", teacher);
    return;
  }
  res.render("home");
});

router.get("/profile", authenticate, async (req, res) => {
  let teacher = await Teacher.findByPk(req.session.teacher_id, {
    attributes: {
      exclude: ["password"],
    },
    include: [
      {
        model: Student,
        exclude: ["teacher_id", "TeacherStudent"],
      },
    ],
  });
  teacher = teacher.get({ plain: true });
  console.log(teacher);
  res.send(teacher);
  // res.render("profile", teacher);
});

module.exports = router;
