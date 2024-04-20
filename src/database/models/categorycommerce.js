'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryCommerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CategoryCommerce.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
      CategoryCommerce.belongsTo(models.Category, { foreignKey: 'idCategory' });
    }
  }
  CategoryCommerce.init({
    idCategory: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'CategoryCommerce',
    tableName: 'CategoriesCommerces',
  });
  return CategoryCommerce;
};