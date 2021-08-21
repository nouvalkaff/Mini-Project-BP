const express = require('express')

const router = express.Router()

const watchController = require('../controllers/watchlistController')

router.get(
    '/watchlist',
    watchController.getWatchlistRelation
);
router.get(
    '/watchlist/:id',
    watchController.getOneWatchlist
);

module.exports = router