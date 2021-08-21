const mongoose = require("mongoose");

const { actorSchema } = require("./actorModel");
const { moreDetailsSchema } = require("./moreDetails");

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: String,
  },
  overview: {
    type: String,
  },
  popularity: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  release_date: {
    type: Date,
  },
  backdrop_path: {
    type: String,
  },
  poster_path: {
    type: String,
  },
  tagline: {
    type: String,
  },
  popularity: {
    type: Number,
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
  genres: {
    type: Array,
  },
  cast: [actorSchema],
  more_details: [moreDetailsSchema],
  tmdb_movieId: {
    type: Number,
  },
});

const MoviesModel = mongoose.model("Movies", moviesSchema);

module.exports = { MoviesModel, moviesSchema };
