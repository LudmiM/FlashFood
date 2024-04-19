'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idOrder: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Orders",
          }
        }
      },
      idProduct: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Products",
          }
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      unitPrice: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderDetails');
  }
};