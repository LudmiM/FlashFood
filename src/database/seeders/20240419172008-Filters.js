'use strict';

const {readJSON} = require('./../../data/')
const filtersJSON = readJSON('filters')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const filters = filtersJSON.map(f => ({ name: f }))
    await queryInterface.bulkInsert('Categories',filters, {});
  },
  
  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
