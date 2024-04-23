<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.CategoryCommerce, { foreignKey: 'idCategory' });
      Category.hasMany(models.Product, { foreignKey: 'idCategory' });
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Category',
  });
  return Category;
};
=======
import Sequelize from "sequelize";

const Category = (sequelize) => {
  sequelize.define(
    "Category",
    {
      name: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};

export default Category;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
