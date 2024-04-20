import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const Favorite = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      idCustomer: DataTypes.UUID,
      idCommerce: DataTypes.UUID,
    },
    { timestamps: false }
  );
};

export default Favorite;
