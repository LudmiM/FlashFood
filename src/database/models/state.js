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
