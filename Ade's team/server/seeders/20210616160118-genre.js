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
     'genres', [
    {
      genre_name: "Action",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Adventure",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Animation",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Comedy",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Crime",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Documentary",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Drama",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Family",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Fantasy",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "History",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Horror",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Music",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Mystery",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Romance",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Science Fiction",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "TV Movie",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Thriller",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "War",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      genre_name: "Western",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
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
