const router = require("express").Router();
const { Teacher, Student, Goal, Role } = require("../../models");

//routes for: /api/teachers

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

router.post("/", async (req, res) => {
  try {
    const teacherData = await Teacher.findOne({
      where: { email: req.body.email },
    });

    if (!teacherData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await teacherData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.teacher_id = teacherData.id;
      req.session.logged_in = true;

      res.status(200).send();
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  // res.render("home");
  res.status(200).send();
});

module.exports = router;
