'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favorite.init({
    idCustomer: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Favorite',
  });
  return Favorite;
};