<<<<<<< HEAD
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
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Role = (sequelize) => {
  sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING
    },
    { timestamps: true }
  );
};

export default Role;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
