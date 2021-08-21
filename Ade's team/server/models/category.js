'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.movies, {
        foreignKey: 'category_id'
      })
    }
  };
  category.init({
    movie_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    category_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};