'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Customer, { foreignKey: 'idCustomer' });
      Review.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
    }
  }
  Review.init({
    idCustomer: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};