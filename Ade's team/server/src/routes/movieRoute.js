const express = require('express')

const router = express.Router()

const movieController = require('../controllers/movieController')

router.get(
    '/movies',
    movieController.getMovie
    
);

router.get(
    '/movies/pagination',
    movieController.getMoviePage
);

router.get(
    '/movieId/:id',
    movieController.getMovieId
);


router.get(
    '/find/movies',
    movieController.getMovieTitle
);

router.get(
    '/moviesWithGenre',
    movieController.getMovieWithGenre
);


router.get(
    '/moviesWithReviewAndUser',
    movieController.getMoviesWithReviewAndUser
);


module.exports = router