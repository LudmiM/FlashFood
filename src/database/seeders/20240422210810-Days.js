'use strict';

const {readJSON} = require('./../../data/')
const daysJSON = readJSON('days')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const days = daysJSON.map(d => ({ name: d }))
    await queryInterface.bulkInsert('Days', days, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Days', null, {});
  }
};
