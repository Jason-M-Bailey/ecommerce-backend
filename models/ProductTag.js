// start of code provided by develop folder
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class ProductTag extends Model {}
// end of code provided by develop folder

// COLUMNS DEFINED BY SEED DATA
ProductTag.init(
  // productTag seed data format
  // product_id: 1,
  // tag_id: 6,

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    // REFERENCES MODEL AND KEY CONNECTS DATA FROM OTHER TABLES
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  // start of code provided by develop folder
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
// end of code provided by develop folder
