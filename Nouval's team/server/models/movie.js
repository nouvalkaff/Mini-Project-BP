"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasOne(models.MovieInfo, { foreignKey: "movieId" });
      Movie.hasMany(models.Review, { foreignKey: "movieId" });
      Movie.hasMany(models.Character, { foreignKey: "movieId" });
      Movie.hasMany(models.MovieCategory, { foreignKey: "movieId" });
    }
  }
  Movie.init(
    {
      // movieCategoryId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      trailer: DataTypes.STRING,
      poster: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
