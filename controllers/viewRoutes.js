const router = require("express").Router();
const { Teacher, Student, Goal, Role, Caseload, Note } = require("../models");
const { authenticate } = require("../utils/middleware/auth");

router.get("/", authenticate, async (req, res) => {
  // console.log(req.session);
 
    res.redirect('/profile')
  
});

router.get("/profile", authenticate, async (req, res) => {
  let teacher = await Teacher.findByPk(req.session.teacher_id, {
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
    })
  teacher = teacher.get({ plain: true });
  res.render("profile", teacher);
});

router.get('/goal/:id', authenticate, async (req, res)=>{
  let goal = await Goal.findByPk(req.params.id, {
    include: [
      {model: Note, attributes: ['createdAt', 'body']},
      {model: Teacher, attributes: ['firstName', 'lastName']},
      {model: Student, attributes: ['firstName', 'lastName']}
  
  ]
  })
  
  goal = goal.get({plain: true})

  console.log(goal)
  res.render('single-goal', {
    logged_in: req.session.logged_in,
    goal
  })
})


module.exports = router;
