const { Review, Movie, User, MovieInfo } = require("../models");
const routes = {};
const { Op } = require("sequelize");

/***
 * create review
 * one user_id Can only create one review each movie
 */

routes.createReview = async (req, res) => {
  try {
    const { userId, movieId, review, rating, headlineReview } = req.body;
    const search = await Review.findOne({ where: { userId: userId, movieId: movieId } });
    if (search) {
      res.send({
        status: 404,
        message: "Sorry.. User just can make one review each movie",
      });
    } else {
      const review = { ...req.body };
      await Review.create(review);
      res.send({
        statusCode: 200,
        statusText: "success",
        message: " Your request for CREATE Review successfully",
        data: review,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error,
    });
  }
};

/**
 * Get review movie by movie_id
 */

routes.getMovieReview = async (req, res) => {
  try {
    const id = req.params.id;
    const { page, size } = req.query;

    const movies = await Movie.findOne({ where: { id: id } });

    if (!movies) {
      res.status(404).json(`The movie with ID: ${id} not found`);
    } else {
      const rating = await Review.sum("rating", { where: { movieId: id } });
      const countRating = await Review.count({ where: { movieId: id } });
      const averageRating = (await rating) / countRating;
  
      const AllMovie = await Movie.findAll({include: [{model: Review, include: User}], where: {id: id}})
      const allreview = AllMovie[0].Reviews;

      function Paginator(items, pages, per_page) {
        var pages = pages || 1,
        per_page = per_page || 10,
        offset = (pages) * per_page,
       
        paginatedItems = items.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(items.length / per_page);
        
        return {
        Page: pages,
        TotalReviews: items.length,
        TotalPages: total_pages,
        data: paginatedItems
        };
      };

      const result = Paginator(allreview, page, size)

      res.send({
      statusCode: 200,
      statusText: "success",
      message: "Showing all reviews for this movie",
      data: {
        Rating: averageRating,
        Reviews: result
      }
      });
    } 
  } catch(error) {
      res.status(500).json({
        statusText: "Internal Server Error",
        message: error.message
      });
    };
  };

/**
 * pagination request for page movie reviews. size is adjustable but only up on 10 reviews per page.
 */
routes.showReviews = async (req, res) => {
  try {
    const getPagination = (page, size) => {
    size > 10 ? (size = 10) : size;
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
      };

    const getPagingData = (data, page, limit) => {
    const { count: totalReviews, rows: reviews } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalReviews / limit);

    return { totalReviews, reviews, totalPages, currentPage };
    };

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    let result = await Review.findAndCountAll({ include: [{model: User}], limit, offset})

    const response = getPagingData(result, page, limit);
    
    res.send({
      statusCode: 200,
      statusText: "success",
      message: "Showing all users reviews for all movies",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message,
    });
  }
};

/**
 * update request. still need to be fix. because it doesn't have authorization (admin still can update)
 */
routes.updateReview = async (req, res) => {
  try {
    const userId = req.params.id;
    const { movieId, review, rating, headlineReview } = req.body;

    const findReview = await Review.findOne({
      where: { id: { [Op.eq]: userId } },
    });

    // condition if user didn't exist.
    if (!findReview) {
      res.send({
        statusCode: 404,
        statusText: "Not Found",
        message: "User not exist.",
      });
    };
    
    // condition if movie didn't exist
    if (!movieId) {
      res.send({
        statusCode: 404,
        statusText: "Not Found",
        message: "Movie not found",
      });
    };

    let reviewDetails = await Review.findOne({
      where: { movieId: { [Op.eq]: movieId } },
    });

    // condition if the user didn't reviewed the movie yet.
    if (!reviewDetails) {
      res.send({
        statusCode: 404,
        statusText: "Failed",
        message: "Uh oh, you didn't reviewed this movie yet.",
      });
    } else {
      reviewDetails.headlineReview = headlineReview;
      reviewDetails.review = review;

      // condition if user input rating above 10. max rating = 10.
      // (rating > 10) ? rating = 10 : rating;
      reviewDetails.rating = rating;

      const result = await reviewDetails.save();

      res.send({
        statusCode: 200,
        statusText: "success",
        message: "Update Review Success!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error,
    });
  }
};

/**
 * delete review by id
 */
routes.deleteReview = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteId = await Review.findOne({ where: { id: id } });
    if (!deleteId) {
      res.send({
        statusCode: 404,
        statusText: "Not Found",
        message: `Review with ID : ${id} is not found`,
      });
    } else {
      Review.destroy({ where: { id: id } });
      res.send({
        status: 200,
        statusText: "success delete",
        message: `Review with ID : ${id} has been deleted!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error,
    });
  }
};

routes.shareReview = async (req, res) => {
  try {
    const id = req.params.id;

    const isUserExist = await Review.findOne({ where: { userId: id } });
    
    // add movie title and poster image
    const reviewUser = await Review.findAll({ include: [{ model: Movie, include: [MovieInfo] }], where: { userId: id } });

    // add movie release years
    // const releaseYears = await MovieInfo.findAll({  })

    if (!isUserExist) {
      res.send({
        statusCode: 404,
        statusText: "Not Found",
        message: `Review with User ID : ${id} Not Found.`,
      });
    } else {
      res.send({
        status: 200,
        statusText: "Review User",
        data: reviewUser
      });
    };
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error,
    });
  }
};

module.exports = routes;
