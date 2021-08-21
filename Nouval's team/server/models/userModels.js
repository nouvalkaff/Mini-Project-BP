"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  //User CLASS
  class User extends Model {
    static associate(models) {
      // one User just can give only One review
      this.hasMany(models.Review, { foreignKey: "userId", onDelete: "cascade" });
      //getting role for user from Role CLASS
      this.belongsTo(models.Role, { foreignKey: "roleId" });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      //required
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //unique
      userName: {
        type: DataTypes.STRING,
        unique: true,
      },
      //required & unique
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
        //  get: getProfilePicture,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   len: {
        //     args: [8,50],
        //     msg: "Password must be more than 8 characters",
        //   },
        // },
      },
      //required
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        foreignKey: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    },
    {
      toJSON: { getters: true }, // Enable getter
    }
  );
  // function getProfilePicture(picture) {
  //   return `/images/profilePictures/${picture}`;
  // }

  return User;
};
