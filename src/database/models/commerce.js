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
      Commerce.belongsTo(models.Role, { foreignKey: 'idRole' });
      Commerce.belongsTo(models.Location, { foreignKey: 'idLocation' });
      Commerce.hasMany(models.CategoryCommerce, { foreignKey: 'idCommerce' });
      Commerce.hasMany(models.Favorite, { foreignKey: 'idCommerce' });
      Commerce.hasMany(models.Product, { foreignKey: 'idCommerce' });
      Commerce.hasMany(models.Review, { foreignKey: 'idCommerce' });
      Commerce.hasMany(models.Schedule, { foreignKey: 'idCommerce' });
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
    coverImage: DataTypes.STRING,
    phone: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Commerce',
  });
  return Commerce;
};