import Sequelize from "sequelize";

const Category = (sequelize) => {
  sequelize.define(
    "Category",
    {
      name: {
        type: Sequelize.DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};

export default Category;
