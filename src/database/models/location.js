'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Location.hasMany(models.Commerce, { foreignKey: 'idLocation' });
      Location.belongsTo(models.Customer, { foreignKey: 'idCustomer' });
    }
  }
  Location.init({
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    comment:DataTypes.TEXT,
    address: DataTypes.TEXT,
    idCustomer: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Location',
  });
  return Location;
};