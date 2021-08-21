'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn( 'Movies', 'movieCategoryId', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn( 'Movies', 'movieCategoryId' );
  }
};