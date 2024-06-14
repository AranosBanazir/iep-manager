const sequelize = require("../config/connection.js");
const { Model, DataTypes, INTEGER } = require("sequelize");

class Goal extends Model {}

Goal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "student",
        key: "id",
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    beingMet: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: 'teacher',
        key: 'id'
      },
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "goal",
  }
);

module.exports = Goal;
