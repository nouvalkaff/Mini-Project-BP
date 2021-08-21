'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn( 'roles', 'rolesDesc', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn( 'roles', 'rolesDesc' );
  }
};
