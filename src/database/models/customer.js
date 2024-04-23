<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsTo(models.Role, { foreignKey: 'idRole' });
      Customer.hasMany(models.Location, { foreignKey: 'idCustomer' });
      Customer.hasMany(models.Favorite, { foreignKey: 'idCustomer' });
      Customer.hasMany(models.Order, { foreignKey: 'idCustomer' });
      Customer.hasMany(models.Review, { foreignKey: 'idCustomer' });
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    idRole: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Customer = (sequelize) => {
  sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      idRole: DataTypes.UUID,
      idLocation: DataTypes.UUID,
    },
    { timestamps: true }
  );
};

export default Customer;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
