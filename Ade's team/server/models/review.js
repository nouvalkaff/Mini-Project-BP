'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.movies, {
        foreignKey: 'movie_id'
      }),
      this.belongsTo(models.users, {
        foreignKey: 'user_id', as: 'UserPeople'
      })
    }
  };
  review.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    headline: {
      type: DataTypes.STRING
    },
    review: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};