'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class char extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.movies, {
        foreignKey: 'movie_id'
      })
    }
  };
  char.init({
    movie_id: DataTypes.INTEGER,
    character_name: DataTypes.STRING,
    character_picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'char',
  });
  return char;
};