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
      "reviews",
      [
        {
          userId: 1,
          movieId: 1,
          review: "Bagus sekali",
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          movieId: 2,
          review: "Filmnya sangat menghibur",
          rating: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          movieId: 3,
          review: "Bagus tapi sayang akhir ceritanya gantung",
          rating: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          movieId: 4,
          review: "Lucu dan menghibur di nonton bareng keluarga",
          rating: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          movieId: 1,
          review: "Keren filmnya",
          rating: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
2