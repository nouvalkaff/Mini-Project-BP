'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsTo(models.Movie, {foreignKey: 'movieId'});
      Character.belongsTo(models.Cast, {foreignKey: 'castId'});
    }
  };
  Character.init({
    movieId: DataTypes.INTEGER,
    castId: DataTypes.INTEGER,
    characterName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};