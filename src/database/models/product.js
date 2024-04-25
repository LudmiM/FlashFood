'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
      Product.belongsTo(models.Category, { foreignKey: 'idCategory' });
      Product.hasMany(models.OrderDetail, { foreignKey: 'idProduct' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    idCategory: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    available: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};