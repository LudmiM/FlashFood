import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Customer = (sequelize) => {
  sequelize.define(
    "Customer",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      idRole: DataTypes.UUID,
      idLocation: DataTypes.UUID,
    },
    { timestamps: true }
  );
};

export default Customer;
