"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("reviews", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      //required
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      //required
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      //required
      review: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      //required
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      //required
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("reviews");
  },
};
