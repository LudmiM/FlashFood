'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Commerce.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    idRole: DataTypes.INTEGER,
    idLocation: DataTypes.INTEGER,
    image: DataTypes.STRING,
    certificate: DataTypes.STRING,
    cuit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Commerce',
  });
  return Commerce;
};