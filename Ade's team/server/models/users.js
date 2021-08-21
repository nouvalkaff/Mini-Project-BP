'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.watchlist, {
        foreignKey: 'user_id'
      }),
      this.hasMany(models.review, {
        foreignKey: 'user_id', as: 'UserReview'
      })
    }
  };
  users.init({
    role: {
      type: DataTypes.STRING,
      defaultValue: 'users',
    },
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_picture: {
      type: DataTypes.STRING,
      defaultValue: 'https://firebasestorage.googleapis.com/v0/b/foto-f141a.appspot.com/o/profile.png?alt=media&token=b56596b2-05f9-4652-9ea0-38cd91004ba9'
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};