const sequelize = require("../config/connection.js");
const { Model, DataTypes } = require("sequelize");

class Caseload extends Model {}

Caseload.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    teacher_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'teacher',
            key: 'id'
        }
    },
    student_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'student',
            key: 'id'
        }
    }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "caseload",
  }
);

module.exports = Caseload;
