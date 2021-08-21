const express = require("express");

const router = express.Router();
const {
  showMovie,
  findMovie,
  movieCategory,
  allCategories,
  movieCharacter,
  allCharacters,
  showMoviebyId,
} = require("../controllers/movieController");

router.get("/home", showMovie);
router.get("/find", findMovie);
router.get("/movieCategory/:id", movieCategory);
router.get("/allCategories", allCategories);
router.get("/movieCharacter/:id", movieCharacter);
router.get("/allCharacters", allCharacters);
router.get("/title/:id", showMoviebyId);

module.exports = router;
