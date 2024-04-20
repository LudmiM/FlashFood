'use strict';

require('dotenv').config();
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Customers', [{
      name: "user",
      lastName: "admin",
      email: "admin@gmail.com",
      password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
      idRole : 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "user",
      lastName: "customer",
      email: "customer@gmail.com",
      password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
      idRole : 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
