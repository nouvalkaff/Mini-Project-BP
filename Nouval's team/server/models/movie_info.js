'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieInfo.belongsTo(models.Movie, {foreignKey: 'movieId'}); 
    }
  };
  MovieInfo.init({
    movieId: DataTypes.INTEGER,
    releaseDate: DataTypes.DATEONLY,
    director: DataTypes.STRING,
    featuredSong: DataTypes.STRING,
    budget: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MovieInfo',
  });
  return MovieInfo;
};