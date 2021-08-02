const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: 'CASCADE',
});


// todo: not sure about these and can not find any examples from bootcamp
// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: {
//     foreignKey: "product_id",
//     model: ProductTag,
//   },
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: {
//     foreignKey: "tag_id",
//     model: ProductTag,
//   }
// })

Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: ProductTag,
  onDelete: 'CASCADE',
});

Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: ProductTag,
  onDelete: 'CASCADE',
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
