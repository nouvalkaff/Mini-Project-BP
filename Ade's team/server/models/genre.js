'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.movie_genre, {
        foreignKey: 'genre_id', as: 'Genre'
      })
    }
  };
  genre.init({
    genre_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'genre',
  });
  return genre;
};