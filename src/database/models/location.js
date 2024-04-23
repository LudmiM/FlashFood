<<<<<<< HEAD
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
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Location = (sequelize) => {
  sequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      country: DataTypes.STRING,
      province: DataTypes.STRING,
      party: DataTypes.STRING,
      municipality: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
    },
    { timestamps: false }
  );
};

export default Location;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
