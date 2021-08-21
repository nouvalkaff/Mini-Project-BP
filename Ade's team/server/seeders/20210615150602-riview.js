'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      'reviews', [
        {
          user_id: 1,
          movie_id: 2,
          headline: 'Ant-Man keren banget',
          review: 'Filmnya keren',
          rating: 4
        },
        {
          user_id: 1,
          movie_id: 3,
          headline: 'Sereemm',
          review: 'Conjuring best film horror',
          rating: 4
        },
        {
          user_id: 1,
          movie_id: 4,
          headline: 'Spider-Man Keren',
          review: 'Tom holland ganteng banget gila!!!',
          rating: 4
        }
      ], {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
