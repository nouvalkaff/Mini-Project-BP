'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.watchlist, { 
        foreignKey: 'watchlist_id'
      }),
      this.belongsTo(models.category, {
        foreignKey: 'category_id'
      }),
      this.hasMany(models.char, {
        foreignKey: 'movie_id'
      }),
      this.hasMany(models.review, {
        foreignKey: 'movie_id', as: 'UserReview'
      }),
      this.hasMany(models.movie_genre, {
        foreignKey: 'movie_id', as: 'MovieGenre'
      })
    }
  };
  movies.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    release_date: DataTypes.STRING,
    director: DataTypes.STRING,
    featured_song: DataTypes.STRING,
    budget: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    trailer: DataTypes.STRING,
    poster: DataTypes.STRING,
    watchlist_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    genre_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};