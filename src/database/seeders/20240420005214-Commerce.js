'use strict';

require('dotenv').config();
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Commerces', [{
      name: "commerce",
      email: "commerce@gmail.com",
      password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
      idRole : 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Commerces', null, {});
  }
};
