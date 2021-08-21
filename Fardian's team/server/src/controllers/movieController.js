//Require package
const mongoose = require("mongoose");
const axios = require("axios");

// Require Model
const { MoviesModel } = require("../../database/models/moviesModel");
const { ActorModel } = require("../../database/models/actorModel");
const { GenreModel } = require("../../database/models/genreModel");
const { MoreDetailsModel } = require("../../database/models/moreDetails");
const ReviewModel = require("../../database/models/reviewModel");

// Get all movies from database
const getAllMovies = async (req, res) => {
		//Pagination
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const data = {};

		if (endIndex < (await MoviesModel.countDocuments().exec())) {
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
		// console.log(page)
		// console.log(limit)

		//Query LIKE
		const ref_title = req.query.title;
		// console.log(ref_title)

		if(page) {
			try {
				data.results = await MoviesModel.find()
					.limit(limit)
					.skip(startIndex)
					.exec();
	
				data.results.reviews = await ReviewModel.countDocuments({
					movie_id: data.results._id,
				});
				data.total_data = await MoviesModel.countDocuments().exec();
	
				res.send({
					statusCode: 200,
					statusText: "Succesfully access movies data.",
					data: data,
				});
			} catch (error) {
				console.log(error);
				res.send({
					statusCode: 500,
					statusText: "Failed to access movies data.",
					statusMessage: error,
				});
			}
		} else {
				try {
					results = await MoviesModel.find({ title: new RegExp(ref_title, "i")})
					// console.log(results)

					res.send({
						statusCode: 200,
						statusText: "Success",
						data: results	
					})
				} catch (error) {
					console.log(error);
					res.send({
						statusCode: 500,
						statusText: "Failed.",
						statusMessage: "Search no results"
					})
				}				
		}			
};

//Get a movie by Id
const getMovie = async (req, res) => {
  const { id: id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.send({
      statusCode: 500,
      statusText: "Failed",
      statusMessage: "Format Id is Invalid.",
    });
  } else {
    const movieDetails = await MoviesModel.findById(id)
      .populate("movie_id")
      .exec();
    const total_review = await ReviewModel.countDocuments({
      movie_id: id,
    });
		const dataReview = await ReviewModel.find({ movie_id: id });
		let sumScore = 0;
		for (i=0; i<dataReview.length; i++) {
			sumScore += dataReview[i].score
		}
		calculate_rating = Math.floor(sumScore/total_review)

    if (!movieDetails) {
      return res.send({
        statusCode: 500,
        statusText: "Failed",
        statusMessage: "Id not found",
      });
    } else {
      res.send({
        statusCode: 200,
        statusText: "Succes",
        data: movieDetails,
        total_review: total_review,
				dynamics_rating: calculate_rating
      });
    }
  }
};

// Input movies to database
const postMovies = async (req, res) => {
  try {
    const options = {
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US",
      params: {
        api_key: process.env.API_KEY,
        page: req.params.page,
      },
    };

    const movieDetails = await axios(options);
    // console.log(movieDetails);
    const movieInfo = movieDetails.data.results;

    for (i = 0; i < movieInfo.length; i++) {
      const refMovie = await MoviesModel.findOne({ title: movieInfo[i].title });

      const resultGenre = [];
      const genreArr = movieInfo[i].genre_ids;
      for (j = 0; j < genreArr.length; j++) {
        const dtGenre = await GenreModel.findOne({
          tmdb_genreId: genreArr[j],
        });
        resultGenre.push(dtGenre.name);
      }
      if (!refMovie) {
        const newMovieDetails = new MoviesModel({
          title: movieInfo[i].title,
          overview: movieInfo[i].overview,
          popularity: movieInfo[i].popularity,
          rating: movieInfo[i].vote_average,
          release_date: movieInfo[i].release_date,
          backdrop_path: movieInfo[i].backdrop_path,
          poster_path: movieInfo[i].poster_path,
          genres: resultGenre,
          cast: await ActorModel.find({ tmdb_movieId: movieInfo[i].id }),
          more_details: await MoreDetailsModel.find({
            tmdb_movieId: movieInfo[i].id,
          }),
          tmdb_movieId: movieInfo[i].id,
        });
        await newMovieDetails.save();
      } else {
        return res.send({
          statusCode: 500,
          statusText: "Failed",
          statusMessage: "Movie is already exist.",
        });
      }
    }

    const allMoviesInfo = await MoviesModel.find();

    res.send({
      statusCode: 200,
      statusText: "Success",
      data: allMoviesInfo,
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "Failed",
      statusMessage: error,
    });
  }
};

//Input movie by tmdb Id (More Details of The Movie Data)
const postDetailsMovieById = async (req, res) => {
  try {
    const ref_tmdb_movieId = req.body.tmdb_movieId;
    const options1 = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${ref_tmdb_movieId}`,
      params: {
        api_key: process.env.API_KEY,
      },
    };
    const options2 = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${ref_tmdb_movieId}/videos`,
      params: {
        api_key: process.env.API_KEY,
      },
    };

    const movieDetails = await axios(options1);
    // console.log(movieDetails.data)

    const trailerDetails = await axios(options2);
    console.log(trailerDetails.data);
    const trailerFirstIndex =
      "https://www.youtube.com/watch?v=" + trailerDetails.data.results[0].key;

    const refMoreDetails = await MoreDetailsModel.find({
      tmdb_movieId: ref_tmdb_movieId,
    });

    try {
      if (refMoreDetails !== []) {
        const newMoreDetails = new MoreDetailsModel({
          budget: movieDetails.data.budget,
          production_companies: movieDetails.data.production_companies,
          revenue: movieDetails.data.revenue,
          runtime: movieDetails.data.runtime,
          tagline: movieDetails.data.tagline,
          spoken_languages: movieDetails.data.spoken_languages,
          trailer_instance: trailerFirstIndex,
          trailers: trailerDetails.data.results,
          tmdb_movieId: ref_tmdb_movieId,
        });
        await newMoreDetails.save();

        const moreDetailsData = await MoreDetailsModel.findOne({
          tmdb_movieId: ref_tmdb_movieId,
        });
        return res.send({
          statusCode: 200,
          statusText: "Success.",
          data: moreDetailsData,
        });
      }
    } catch (error) {
      console.log(error);
      return res.send({
        statusCode: 500,
        statusText: "Failed",
        statusMessage: "Movie Details is already exist.",
        errorMessage: error,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "Failed.",
      statusMessage: error,
    });
  }
};

//Update a movie by Id
const updateMovie = async (req, res) => {
  try {
    const { id: id } = req.params;
    const {
      title,
      overview,
      popularity,
      rating,
      release_date,
      backdrop_path,
      poster_path,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.send({
        statusCode: 500,
        status: "fail",
        statusMessage: "Format Id is Invalid",
      });
    } else {
      let movieDetails = await MoviesModel.findById(id);
      if (!movieDetails) {
        return res.send({
          statusCode: 500,
          statusText: "Failed",
          statusMessage: "Id is not Found",
        });
      } else {
        MovieDetails = await MoviesModel.findByIdAndUpdate(id, {
          title,
          overview,
          popularity,
          rating,
          release_date,
          backdrop_path,
          poster_path,
        });

        const newMovieDetails = await MoviesModel.findById(id);
        res.send({
          statusCode: 200,
          statusMessage: "Success",
          updated_data: newMovieDetails,
          previous_data: movieDetails,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "Failed",
      statusMessage: error,
    });
  }
};

// Delete a movie by Id
const deleteMovie = async (req, res) => {
  try {
    const { id: id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.send({
        statusCode: 500,
        statusText: "Failed",
        statusMessage: "Format Id is Invalid.",
      });
    } else {
      const getMovieDetails = await MoviesModel.findById(id);

      if (!getMovieDetails) {
        return res.send({
          statusCode: 500,
          statusText: "Failed",
          statusMessage: "Id is Not Found",
        });
      } else {
        const movieDetails = await MoviesModel.findByIdAndDelete(id);
        const moreDetails = await MoreDetailsModel.findByIdAndDelete(
          movieDetails.tmdb_movieId
        );
        console.log(movieDetails);
        res.send({
          statusCode: 200,
          statusText: "Success",
          deleted_data: movieDetails,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "Failed",
      statusMessage: error,
    });
  }
};

// Delete all movies
const deleteAllMovies = async (req, res) => {
  try {
    const movieDetails = await MoviesModel.deleteMany();
    console.log(movieDetails);
    res.send({
      statusCode: 200,
      statusText: "Success",
      deleted_data_count: movieDetails.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "Failed",
      statusMessage: error,
    });
  }
};

module.exports = {
  getAllMovies,
  getMovie,
  postMovies,
  postDetailsMovieById,
  updateMovie,
  deleteMovie,
  deleteAllMovies,
};
