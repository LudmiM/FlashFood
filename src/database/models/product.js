<<<<<<< HEAD
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
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Product = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
      idCategory: DataTypes.UUID,
      idCommerce: DataTypes.UUID,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      currencyType: DataTypes.STRING,
      time: DataTypes.INTEGER,
      available: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};

export default Product;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
