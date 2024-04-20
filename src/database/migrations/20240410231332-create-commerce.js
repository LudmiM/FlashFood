'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Commerces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING
      },
      idRole: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Roles",
          }
        }
      },
      idLocation: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Locations",
          }
        }
      },
      image: {
        type: Sequelize.STRING
      },
      coverImage: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Commerces');
  }
};