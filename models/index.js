const Teacher = require("./Teacher");
const Student = require("./Student");
const Role = require("./Role");
const Goal = require("./Goal");
const Note = require('./Note')
const Caseload = require('./Caseload')

Teacher.hasOne(Role, {foreignKey: 'id'})
Role.belongsTo(Teacher, {foreignKey: 'id'})


Teacher.hasMany(Teacher, {foreignKey: 'id'})
Teacher.belongsTo(Teacher, {foreignKey: 'id'})

Goal.hasMany(Note, {foreignKey: 'id'})
Note.belongsTo(Goal, {foreignKey: 'id'})

Teacher.belongsToMany(Student, {
  through: Caseload,
  foreignKey: 'teacher_id'
} )

Student.belongsToMany(Teacher, {
  through: Caseload,
  foreignKey: 'student_id'
})

Student.hasMany(Goal, {foreignKey: 'student_id'})
Goal.belongsTo(Student, {foreignKey: 'student_id'})

Teacher.hasMany(Goal, {foreignKey: 'created_by'})
Goal.belongsTo(Teacher, {foreignKey: 'created_by'})



module.exports = {
  Teacher,
  Student,
  Role,
  Goal,
  Note,
  Caseload,
};
