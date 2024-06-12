const Teacher = require("./Teacher");
const Student = require("./Student");
const Role = require("./Role");
const Goal = require("./Goal");
const Note = require('./Note')
const Caseload = require('./Caseload')

Teacher.hasOne(Role, {foreignKey: 'role_id'})
Role.belongsTo(Teacher, {foreignKey: 'role_id'})


Teacher.hasMany(Teacher, {foreignKey: 'id'})
Teacher.belongsTo(Teacher, {foreignKey: 'id'})

Goal.hasMany(Note, {foreignKey: 'goal_id'})
Note.belongsTo(Goal, {foreignKey: 'goal_id'})

Teacher.belongsToMany(Student, {
  through: Caseload,
  foreignKey: 'student_id'
} )

Student.belongsToMany(Teacher, {
  through: Caseload,
  foreignKey: 'teacher_id'
})





module.exports = {
  Teacher,
  Student,
  Role,
  Goal,
  Note,
  Caseload,
};
