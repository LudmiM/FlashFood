'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'idCustomer' });
      Order.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
      Order.belongsTo(models.State, { foreignKey: 'idState' });
      Order.hasMany(models.OrderDetail, { foreignKey: 'idOrder' });
    }
  }
  Order.init({
    idCustomer: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER,
    idState: DataTypes.INTEGER,
    finalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};