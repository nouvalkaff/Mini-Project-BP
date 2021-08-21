"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieCategory.belongsTo(models.Movie, { foreignKey: "movieId" });
      MovieCategory.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  MovieCategory.init(
    {
      categoryId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MovieCategory",
    }
  );
  return MovieCategory;
};
