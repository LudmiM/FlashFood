'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.hasMany(models.Commerce, { foreignKey: 'idRole' });
      Role.hasMany(models.Customer, { foreignKey: 'idRole' });
    }
  }
  
  Role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Role',
  });
  
  return Role;
};
