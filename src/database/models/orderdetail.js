'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetail.init({
    idOrder: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};