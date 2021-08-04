// start of code provided by develop folder
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// end of code provided by develop folder


// PRODUCT BELONGSTO CATEGORY
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: 'CASCADE',
});

// CATEGORY HASMANY PRODUCT
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

// PRODUCT BELONGTOMANY TAG (THROUGH PRODUCTTAG)
Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: ProductTag,
  onDelete: 'CASCADE',
});

// TAG BELONGTOMANY PRODUCT (THROUGH PRODUCTTAG)
Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: ProductTag,
  onDelete: 'CASCADE',
})

//
// start of code provided by develop folder
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
// end of code provided by develop folder
//