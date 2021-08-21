'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.movies, {
        foreignKey: 'watchlist_id',
      }),
      this.belongsTo(models.users, { 
        foreignKey: 'user_id' 
      })
    }
  };
  watchlist.init({
    movie_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {
    sequelize,
    modelName: 'watchlist',
  });
  return watchlist;
};