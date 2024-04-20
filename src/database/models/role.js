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
