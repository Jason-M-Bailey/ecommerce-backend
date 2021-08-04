// start of code provided by develop folder
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Product extends Model {}
// end of code provided by develop folder

// COLUMNS DEFINED BY SEED DATA
Product.init(
  
  // product seed data format
  // product_name: 'Plain T-Shirt',
  // price: 14.99,
  // stock: 14,
  // category_id: 1,

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // STATE WHICH MODEL AND KEY TO CONNECT DATA
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
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
    modelName: "product",
  }
);

module.exports = Product;
// end of code provided by develop folder
