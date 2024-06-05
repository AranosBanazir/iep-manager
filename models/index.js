const Teacher = require("./Teacher");
const Student = require("./Student");
const Role = require("./Role");
const Goal = require("./Goal");

Teacher.belongsTo(Role, {
  foreignKey: "role_id",
});
Role.hasMany(Teacher, {
  foreignKey: "role_id",
});

Teacher.belongsToMany(Student, {
  through: "TeacherStudent",
  foreignKey: "student_id",
});
Student.belongsToMany(Teacher, {
  through: "TeacherStudent",
  foreignKey: "teacher_id",
});

Student.hasMany(Goal);
Goal.belongsTo(Student);

module.exports = {
  Teacher,
  Student,
  Role,
  Goal,
};
