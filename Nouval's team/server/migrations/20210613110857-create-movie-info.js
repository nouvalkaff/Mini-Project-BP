"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MovieInfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      releaseDate: {
        type: Sequelize.DATEONLY,
      },
      director: {
        type: Sequelize.STRING,
      },
      featuredSong: {
        type: Sequelize.STRING,
      },
      budget: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MovieInfos");
  },
};
