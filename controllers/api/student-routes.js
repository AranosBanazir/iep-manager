const router = require("express").Router();
const { parse } = require("dotenv");
const sequelize = require("../../config/connection");
const { Student, Teacher, Goal } = require("../../models");
// route: /api/students

// router.get("/", async (req, res) => {
//   const students = await Student.findAll();
//   const parsedStudents = students.map((student) =>
//     student.get({ plain: true })
//   );

//   for (const student of parsedStudents) {
//     const teacherArray = [];
//     for (const teacher of student.teacher_id) {
//       const teacherConvert = await Teacher.findByPk(teacher, {
//         attributes: {
//           exclude: ["password"],
//         },
//       });

//       teacherArray.push(teacherConvert);
//     }
//     student.teacher_id = teacherArray;
//   }

//   res.send(parsedStudents);
// });

router.get("/", async (req, res) => {
  const students = await Student.findAll({
    include: [{ model: Teacher, through: "TeacherStudent" }],
  });
  const parsedStudents = students.map((student) =>
    student.get({ plain: true })
  );

  res.json(parsedStudents);
});

module.exports = router;
