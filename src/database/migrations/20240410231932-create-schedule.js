'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDay: {
        type: Sequelize.INTEGER
      },
      idCommerce: {
        type: Sequelize.INTEGER
      },
      open: {
        type: Sequelize.BOOLEAN
      },
      opening: {
        type: Sequelize.TIME
      },
      close: {
        type: Sequelize.TIME
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  }
};