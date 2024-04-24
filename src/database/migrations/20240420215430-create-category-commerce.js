'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CategoryCommerces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCategory: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories",
          }
        }
      },
      idCommerce: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Commerces",
          }
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CategoryCommerces');
  }
};