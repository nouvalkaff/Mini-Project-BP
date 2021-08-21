const express = require('express')

const router = express.Router()
// const controller = require('../controllers/usersController')
const genre = require('../controllers/genreController')

// router.get('/users', controller.getUsers)

// Route Genre
router.get('/genres', genre.getGenre)
// router.get('/genreMovie', genre.getMovieGenre)
router.post('/genre', genre.createGenre)
router.put('/genre/:id' , genre.updateGenre)
router.delete('/genre/:id', genre.deleteGenre)


module.exports = router