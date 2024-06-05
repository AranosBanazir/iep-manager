const router = require("express").Router();
const { parse } = require("dotenv");
const { Student, Teacher, Goal } = require("../../models");
// route: /api/students

router.get("/", async (req, res) => {
  const students = await Student.findAll();

  const parsedStudents = students.map((student) =>
    student.get({ plain: true })
  );

  for (const student of parsedStudents) {
    for (const teacher of student.teacher_id){
        n
    }
  }

  res.send(parsedStudents);
});

module.exports = router;
