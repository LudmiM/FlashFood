'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCustomer: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Customers",
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
    await queryInterface.dropTable('Favorites');
  }
};