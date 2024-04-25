'use strict';

const {readJSON} = require('./../../data/')
const roleJSON = readJSON('role')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const roles = roleJSON.map(r => ({ name: r }))
    await queryInterface.bulkInsert('Roles',roles, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Roles', null, {});

  }
};
