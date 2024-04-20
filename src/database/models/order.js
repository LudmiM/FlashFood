import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Order = (sequelize) => {
  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      idCustomer: DataTypes.UUID,
      idProduct: DataTypes.UUID,
      idState: DataTypes.UUID,
      price: DataTypes.INTEGER,
      available: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};

export default Order;
