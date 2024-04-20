import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Location = (sequelize) => {
  sequelize.define(
    "Location",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      country: DataTypes.STRING,
      province: DataTypes.STRING,
      party: DataTypes.STRING,
      municipality: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
    },
    { timestamps: false }
  );
};

export default Location;
