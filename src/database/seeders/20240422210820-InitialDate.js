'use strict';

const {
  customers,
  locations,
  commerces,
  products,
  favorites,
  orders,
  categoryCommerces
} = require('./../scripts + DER/dateForSeeder');

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('Customers', customers, {});
      await queryInterface.bulkInsert('Locations', locations, {});
      await queryInterface.bulkInsert('Commerces', commerces, {});
      await queryInterface.bulkInsert('Products', products, {});
      await queryInterface.bulkInsert('Favorites', favorites, {});
      await queryInterface.bulkInsert('Orders', orders, {});
      

      await queryInterface.bulkInsert('CategoryCommerces', categoryCommerces, {});
      
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('CategoryCommerces', null, {});
      await queryInterface.bulkDelete('Orders', null, {});
      await queryInterface.bulkDelete('Favorites', null, {});
      await queryInterface.bulkDelete('Products', null, {});
      await queryInterface.bulkDelete('Commerces', null, {});
      await queryInterface.bulkDelete('Locations', null, {});
      await queryInterface.bulkDelete('Customers', null, {});
      
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
};

