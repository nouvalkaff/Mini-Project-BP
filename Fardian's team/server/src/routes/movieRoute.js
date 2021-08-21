const express = require("express");

const route = express.Router();
const { user, admin } = require("../middleware/authentication");

const {
  getAllMovies,
  getMovie,
  postMovies,
  postDetailsMovieById,
  updateMovie,
  deleteMovie,
  deleteAllMovies,
} = require("../controllers/movieController");

//Get All Movies
route.get("/", getAllMovies);

//Get Movie by Id
route.get("/:id", getMovie);

//Post More Data Movie by tmdb_id
route.post("/", admin, postDetailsMovieById);

//Post Movie by page (20 data per page)
route.post("/:page", admin, postMovies);

//Update a Movie by Id
route.put("/:id", admin, updateMovie);

//Delete a Movie by Id
route.delete("/:id", admin, deleteMovie);

//Delete All Movie
route.delete("/", admin, deleteAllMovies);

module.exports = route;
