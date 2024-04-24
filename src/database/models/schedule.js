'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Schedule.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
      Schedule.belongsTo(models.Day, { foreignKey: 'idDay' });
    }
  }
  Schedule.init({
    idDay: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER,
    open: DataTypes.BOOLEAN,
    opening: DataTypes.TIME,
    close: DataTypes.TIME
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Schedule',
  });
  return Schedule;
};