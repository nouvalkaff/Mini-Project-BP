"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  //Role CLASS
  class Role extends Model {
    static associate(models) {
      // One role can many User
      this.hasMany(models.User, { foreignKey: "roleId" });
    }
  }
  //ROLE define
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      //required
      roleType: {
        type: DataTypes.STRING,
        allowNull: false,
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
      //important
      sequelize,
      modelName: "Role",
      tableName: "roles",
    },
    {
      timeStamp: false,
    }
  );
  return Role;
};
