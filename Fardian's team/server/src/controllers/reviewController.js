//require model
const { default: axios } = require("axios");
const mongoose = require("mongoose");
const { MoviesModel } = require("../../database/models/moviesModel");
const ReviewModel = require("../../database/models/reviewModel");

//Get all Reviews
const getAllReviews = async (req, res) => {
  // Pagination
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const data = {};

  if (endIndex < (await ReviewModel.countDocuments().exec())) {
    data.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    data.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  try {
    data.results = await ReviewModel.find()
      .populate({
        path: "user_id",
        select: ["userName", "fullName", "profile_pic"],
      })
      .populate({
        path: "movie_id",
        select: ["title", "backdrop_path", "poster_path", "release_date"],
      })
      .limit(limit)
      .skip(startIndex)
      .exec();
    data.total_data = await ReviewModel.countDocuments().exec();

    res.send({
      statusCode: 200,
      statusText: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: error,
    });
  }
};

//Get a Review by ID
const getReview = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await ReviewModel.findById(_id)
      .populate({
        path: "user_id",
        select: ["userName", "fullName", "profile_pic"],
      })
      .populate({
        path: "movie_id",
        select: ["title", "backdrop_path", "poster_path", "release_date"],
      });

    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      res.send({
        statusCode: 200,
        statusText: "success",
        data,
      });
    }
  }
};

//Create Review
const createReview = async (req, res) => {
  const newReview = new ReviewModel(req.body);
  // const user = await UserModel.findById({ _id: req.body.user_id });

  try {
    // await user.user_Review.push(newReview);
    // await user.save();
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.log(error);
    res.status(409).json(error);
  }
};

//Create Dummy Review
const createReveiwByMovieId = async (req,res) => {
	try {
		const tmdb_movieId = req.params.id;
		const options = {
			method: "get",
			url: `https://api.themoviedb.org/3/movie/${tmdb_movieId}/reviews`,
			params: {
				api_key: process.env.API_KEY
			}
		}

		const data = {};
		const movieReview = await axios(options);
		// console.log(movieReview.data);

		//Filtering data
		data.tmdb_movieId = movieReview.data.id
		data.rating = Math.floor(Math.random()*(10-6)+6);
		data.review = movieReview.data.results[0].content.substring(0,500);

		const movieInfo = await MoviesModel.findOne({ tmdb_movieId: tmdb_movieId })
		const refReview = ReviewModel.findOne({ movie_id: movieInfo._id, user_id: req.user.id })
		// console.log(movieInfo._id)
		// console.log(data);
		// console.log(req.user);
		console.log(refReview)
		// console.log("movie id "+movieInfo._id)

		
		if (!refReview.movie_id) {
			const newReview = new ReviewModel({
				user_id: req.user.id,
				movie_id: movieInfo._id,
				review_headline: data.review.substring(0,40),		
				review_detail: data.review.substring(100,400),
				score: data.rating
			})
			await newReview.save();

			return	res.send({
				statusCode: 200,
				statusText: "Success",
				data: newReview
			});
		}	else {
			return res.send({
			statusCode: 500,
			statusText: "Failed",
			statusMessage: "User already submitted review for this movie"
			})
		}
		
	} catch(error) {
		console.log(error);
		res.status(409).json(error);
	}
	
}

//Update Review
const updateReview = async (req, res) => {
  const { id: _id } = req.params;
  const newData = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await ReviewModel.findById(_id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      const updatedReview = await ReviewModel.findByIdAndUpdate(_id, newData, {
        new: true,
      });
      return res.send({
        statusCode: 200,
        statusText: "success",
        data: updatedReview,
      });
    }
  }
};

//Delete Review by ID
const deleteReview = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await ReviewModel.findById(id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      await ReviewModel.findByIdAndRemove(id);
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Review deleted succesfully",
      });
    }
  }
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
	createReveiwByMovieId,
  updateReview,
  deleteReview,
};
