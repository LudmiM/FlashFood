<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  State.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'State',
  });
  return State;
};
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const State = (sequelize) => {
  sequelize.define(
    "State",
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

export default State;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
