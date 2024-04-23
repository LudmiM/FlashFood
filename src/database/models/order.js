<<<<<<< HEAD
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
      Order.belongsTo(models.State, { foreignKey: 'idState' });
      Order.hasMany(models.OrderDetail, { foreignKey: 'idOrder' });
    }
  }
  Order.init({
    idCustomer: DataTypes.INTEGER,
    idState: DataTypes.INTEGER,
    finalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Order = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      idCustomer: DataTypes.UUID,
      idProduct: DataTypes.UUID,
      idState: DataTypes.UUID,
      price: DataTypes.INTEGER,
      available: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};

export default Order;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
