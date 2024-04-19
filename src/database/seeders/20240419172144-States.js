'use strict';

const {readJSON} = require('./../../data/')
const statesJSON = readJSON('states')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const states = statesJSON.map(s => ({ name: s }))
    await queryInterface.bulkInsert('States',states, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('States', null, {});
  }
};
