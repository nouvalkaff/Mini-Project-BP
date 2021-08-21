'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      featured_song: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      synopsis: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      watchlist_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      category_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      genre_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  }
};