const sequelize = require("../config/connection.js");
const { Model, DataTypes } = require("sequelize");

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "student",
        key: "id",
      },
    },
    goal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'goal',
            key: 'id'
        }
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "note",
  }
);

module.exports = Note;
