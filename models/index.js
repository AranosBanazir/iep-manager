const Teacher = require("./Teacher");
const Student = require("./Student");
const Role = require("./Role");
const Goal = require("./Goal");

Teacher.hasOne(Role);
Role.belongsTo(Teacher);

Teacher.belongsToMany(Student, { through: "TeacherStudent" });
Student.belongsToMany(Teacher, { through: "TeacherStudent" });

Student.hasMany(Goal);
Goal.belongsTo(Student);

module.exports = {
  Teacher,
  Student,
  Role,
  Goal,
};
