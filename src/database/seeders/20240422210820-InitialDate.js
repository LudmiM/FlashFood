<<<<<<< HEAD
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

=======
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
      // Insertar datos en las tablas customers, locations, commerces, products, favorites, orders
      await queryInterface.bulkInsert('Customers', customers, {});
      await queryInterface.bulkInsert('Locations', locations, {});
      await queryInterface.bulkInsert('Commerces', commerces, {});
      await queryInterface.bulkInsert('Products', products, {});
      await queryInterface.bulkInsert('Favorites', favorites, {});
      await queryInterface.bulkInsert('Orders', orders, {});
      
      // Insertar datos en la tabla categoryCommerces
      await queryInterface.bulkInsert('CategoryCommerces', categoryCommerces, {});
      
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      // Eliminar los datos de las tablas en orden inverso al que se insertaron
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

>>>>>>> 0642f915a359e3e6d6b1bbd76d12f9821e5745ee
