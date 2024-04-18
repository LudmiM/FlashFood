'use strict';
/**
 * @type {import('sequelize').Migration}
 */
module.exports = {
  // Usa la sintaxis async/await para definir las funciones up y down
  async up(queryInterface, Sequelize) {
    // Usa el operador await para esperar que se cree la tabla
    await queryInterface.createTable('Roles', {
      // Define las columnas de la tabla
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // Usa el operador await para esperar que se elimine la tabla
    await queryInterface.dropTable('Roles');
  }
};
