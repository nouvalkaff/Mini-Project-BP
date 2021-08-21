'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn( 'reviews', 'headlineReview', Sequelize.STRING );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn( 'reviews', 'headlineReview' );
  }
};e