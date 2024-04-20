import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Commerce = (sequelize) => {
  sequelize.define(
    "Commerce",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      idRole: DataTypes.INTEGER,
      idLocation: DataTypes.INTEGER,
      image: DataTypes.STRING,
      certificate: DataTypes.STRING,
      cuit: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};

export default Commerce;
