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
      // define association here
    }
  }
  Location.init({
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    party: DataTypes.STRING,
    municipality: DataTypes.STRING,
    neighborhood: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};