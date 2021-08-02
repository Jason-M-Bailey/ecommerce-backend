// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: category_id,
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: category_id,
});


// todo: not sure about these and can not find any examples from bootcamp
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    foreignKey: product_id,
    model: ProductTag,
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    foreignKey: tag_id,
    model: ProductTag,
  }
})



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
