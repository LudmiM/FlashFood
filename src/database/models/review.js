<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Customer, { foreignKey: 'idCustomer' });
      Review.belongsTo(models.Commerce, { foreignKey: 'idCommerce' });
    }
  }
  Review.init({
    idCustomer: DataTypes.INTEGER,
    idCommerce: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
=======
import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Review = (sequelize) => {
  sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      idCustomer: DataTypes.UUID,
      idCommerce: DataTypes.UUID,
      comment: DataTypes.TEXT,
      score: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};

export default Review;
>>>>>>> 5ae99d3a1504e796c354cfbeb1c62cfa12a90277
