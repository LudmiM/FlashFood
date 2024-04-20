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
