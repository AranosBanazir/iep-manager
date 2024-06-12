const teacherData = require("./teacherData.json");
const roleData = require("./roleData.json");
const studentData = require("./studentData.json");
const goalData = require("./goalData.json");
const sequelize = require("../config/connection");
const noteData  = require('./noteData.json')
const caseloadData = require('./caseloadData.json')
const { Teacher, Student, Role, Goal, Note, Caseload } = require("../models");

seedDB = async () => {
  await sequelize.sync({ force: true });
  // console.log(studentTeachData);
  await Role.bulkCreate(roleData);

  await Teacher.bulkCreate(teacherData, {
    individualHooks: true,
    returning: true,
  });

  await Student.bulkCreate(studentData);
  await Goal.bulkCreate(goalData);
  await Note.bulkCreate(noteData)
  await Caseload.bulkCreate(caseloadData)
};

seedDB();
