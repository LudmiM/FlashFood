<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorite.belongsTo(models.Customer, { foreignKey: 'idCustomer' });
      Favorite.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
    }
  }
  Favorite.init({
    idCustomer: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Favorite',
  });
  return Favorite;
};
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Favorite = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      idCustomer: DataTypes.UUID,
      idCommerce: DataTypes.UUID,
    },
    { timestamps: false }
  );
};

export default Favorite;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
