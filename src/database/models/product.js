import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Product = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
      idCategory: DataTypes.UUID,
      idCommerce: DataTypes.UUID,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      currencyType: DataTypes.STRING,
      time: DataTypes.INTEGER,
      available: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};

export default Product;
