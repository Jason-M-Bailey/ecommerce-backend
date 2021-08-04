// start of code provided by develop folder
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
class Category extends Model {}
// end of code provided by develop folder


// ID & CATEGORY_NAME PULLED FROM SEED DATA
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  // start of code provided by develop folder
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
// end of code provided by develop folder