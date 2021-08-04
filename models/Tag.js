// start of code provided by develop folder
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Tag extends Model {}
// end of code provided by develop folder


// COLUMNS DETERMINED BY SEED DATA
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    }
  },
  // start of code provided by develop folder
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
// end of code provided by develop folder