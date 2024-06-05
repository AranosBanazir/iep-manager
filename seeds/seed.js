const teacherData = require("./teacherData.json");
const roleData = require("./roleData.json");
const studentData = require("./studentData.json");
const goalData = require("./goalData.json");

const sequelize = require("../config/connection");
const { Teacher, Student, Role, Goal } = require("../models");

seedDB = async () => {
  await sequelize.sync({ force: true });

  await Role.bulkCreate(roleData);

  await Teacher.bulkCreate(teacherData, {
    individualHooks: true,
    returning: true,
  });

  await Student.bulkCreate(studentData);

  await Goal.bulkCreate(goalData);
};

seedDB();
