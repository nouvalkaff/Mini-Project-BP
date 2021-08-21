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
      'categories', [
        {
          movie_id: 1,
          category_name: 'comedy'
        },
        {
          movie_id: 1,
          category_name: 'horror'
        },
        {
          movie_id: 1,
          category_name: 'romance'
        },
        {
          movie_id: 1,
          category_name: 'drakor'
        },
        {
          movie_id: 1,
          category_name: 'film indonesia'
        },
        {
          movie_id: 1,
          category_name: 'anime'
        },
        {
          movie_id: 1,
          category_name: 'bollywood'
        },
        {
          movie_id: 1,
          category_name: 'hollywood'
        },
    ], {}
    )

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
