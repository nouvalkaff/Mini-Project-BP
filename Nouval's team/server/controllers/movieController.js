const {
  Movie,
  MovieCategory,
  Character,
  MovieInfo,
  Category,
  Review,
} = require("../models");
const routes = {};
const { Op, Model } = require("sequelize");

/**
 * Showing all movie in database for homepage
 */
routes.showMovie = async (req, res) => {
  try {
    const allMovies = await Movie.findAll({
      include: [{ model: MovieCategory, include: [Category] }],
    });
    res.send({
      statusCode: 200,
      statusText: "success",
      message: "Here you go!",
      data: allMovies,
    });
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: "Sorry, we can't get you the movies :'(",
    });
  }
};

routes.showMoviebyId = async (req, res) => {
  const movieId = req.params.id;
  try {
    //add rating to data
    const movie = await Movie.findOne({
      include: MovieInfo,
      where: { id: movieId },
    });

    const rating = await Review.sum("rating", { where: { movieId: movieId } });
    const countRating = await Review.count({ where: { movieId: movieId } });
    const averageRating = (await rating) / countRating;

    // add movie category to data
    const movieCategory = await MovieCategory.findAll({
      include: Category,
      where: { movieId: movieId },
    });

    const categories = await movieCategory.map((x) => x.dataValues.Category);

    if (movie !== null) {
      res.send({
        statusCode: 200,
        statusText: "success",
        message: "Here you go!",
        data: {
          rating: averageRating,
          category: categories,
          movie: movie,
        },
      });
    } else {
      res.status(404).json({
        statusText: "No Data Found",
        message: "Sorry, we can't get you the movies :'(",
      });
    }
  } catch (error) {
    console.log(
      "🦄 ~ file: movieController.js ~ line 50 ~ routes.showMoviebyId= ~ error",
      error
    );
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error,
    });
  }
};

/**
 * Search movie by title(judul)
 */
routes.findMovie = async (req, res) => {
  try {
    let title = req.query.title;
    let condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    const isTitleExist = await Movie.findOne({
      where: { title: { [Op.iLike]: `%${title}%` } },
    });
    console.log(
      "🦄 ~ file: movieController.js ~ line 77 ~ routes.findMovie= ~ isTitleExist",
      isTitleExist
    );

    if (condition === null) {
      res.status(404).json({
        statusText: "No Results Found",
        message: "Please insert a title",
      });
    } else if (!isTitleExist) {
      res.status(404).json({
        statusText: "No Results Found",
        message: "Sorry we don't have that movie :(",
      });
    }

    const result = await Movie.findAll({
      where: condition,
    });

    res.send({
      statusCode: 200,
      statusText: "success",
      message: `Results for ${title} `,
      data: result,
    });
  } catch (error) {
    console.log(
      "🦄 ~ file: movieController.js ~ line 112 ~ routes.findMovie= ~ error",
      error
    );
    res.status(500).json(error);
  }
};

routes.movieCategory = async (req, res) => {
  try {
    const id = req.params.id;
    // const categoryFilm = await Category.findAll({include: [{model: MovieCategory, include: [Movie]}], where: {id: id}});
    const categoryData = await Category.findOne({ where: { id: id } });

    const filmCategory = await MovieCategory.findAll({
      where: { categoryId: id },
    });

    const dt = await filmCategory.map((x) => x.dataValues.movieId);
    const movieData = await Movie.findAll({
      where: { id: dt },
    });

    if (!categoryData) {
      res.send({
        statusCode: 404,
        statusText: "Not Found",
        message: `Category with ID : ${id} is not found`,
      });
    } else {
      res.send({
        statusCode: 200,
        statusText: "success",
        message: `Your request for get all Category from movie id : ${id} successfully`,
        data: { category: categoryData, movies: movieData },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

routes.allCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAll();

    res.send({
      statusCode: 200,
      statusText: "success",
      message: "Here you go all categories!",
      data: allCategories,
    });
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: "Sorry, we can't get you all the categories",
      Error: err,
    });
  }
};

routes.movieCharacter = async (req, res) => {
  try {
    const id = req.params.id;
    const movieChar = await Movie.findAll({
      include: [Character],
      where: { id: id },
    });
    const movieId = await Movie.findOne({ where: { id: id } });

    if (!movieId) {
      res.send({
        statusCode: 404,
        statusText: "Not Found",
        message: ` Movie with ID : ${id} is not found`,
      });
    } else {
      res.send({
        statusCode: 200,
        statusText: "success",
        message: `Your request for get all Character from movie id : ${id} successfully`,
        data: {
          Movie: movieChar,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

routes.allCharacters = async (req, res) => {
  try {
    const allCharacters = await Character.findAll();

    res.send({
      statusCode: 200,
      statusText: "success",
      message: "Here you go all characters data!",
      data: allCharacters,
    });
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: "Sorry, we can't get you all the characters data",
      Error: err,
    });
  }
};

module.exports = routes;
