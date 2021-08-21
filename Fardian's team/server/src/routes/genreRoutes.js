const express = require("express");

const route = express.Router();

const {
  getAllGenres,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre,
} = require("../controllers/genreController");

//Get All Genres
route.get("/", getAllGenres);

//Get single Genre by id
route.get("/:id", getGenre);

//Create Genre
route.post("/", createGenre);

//Update Genre
route.put("/:id", updateGenre);

//Delete Genre
route.delete("/:id", deleteGenre);

module.exports = route;
