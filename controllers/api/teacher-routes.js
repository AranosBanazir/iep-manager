const router = require("express").Router();
const { Teacher, Student, Goal, Role, Note } = require("../../models");

//routes for: /api/teachers

router.get("/", async (req, res) => {
  let teachers = await Teacher.findAll({
    attributes: {
      exclude: ["password", "role_id", "manager"],
    },
    include: [
      { model: Role , attributes: ['name', 'description', 'abbrev']},
      {model: Student,
        include: [{model: Goal,
          include: [{model: Note}]
        }]
      }
  ],
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


router.get('/:id', async (req, res)=>{
  const teacher = await Teacher.findByPk(req.params.id,{
    attributes: {
      exclude: ['password']
    }
  })

  res.status(200).json(teacher)
})


router.get('/role', async (req, res) =>{
  const roles = await Role.findAll()

  res.send(roles)
})

module.exports = router;
