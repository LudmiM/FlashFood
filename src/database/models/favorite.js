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
      Favorite.belongsTo(models.Customer, { foreignKey: 'idCustomer' });
      Favorite.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
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