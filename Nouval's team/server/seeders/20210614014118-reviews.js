'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('reviews', [{
      userId: 1,
      movieId: 1,
      review: 'Filmnya bagus banget! (seeder demo)',
      rating: 8
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reviews', null, {});
  }
};
