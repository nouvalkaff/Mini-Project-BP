"use strict";

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
      "Categories",
      [
        {
          categoryName: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Drama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Romance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Action",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Sci-fi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Thriller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Cartoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Horror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Mistery",
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
  },
};
