const express = require('express')

const router = express.Router()

const reviewController = require('../controllers/reviewController')
const tokenMiddleware = require('../middleware/tokenMiddleware');

// Route Character
router.get(
    '/reviews', reviewController.getReviews
    )
router.post(
    '/create/review', 
    tokenMiddleware.verifyToken, 
    reviewController.createReview
)

router.put(
    '/update/review', 
    tokenMiddleware.verifyToken, 
    reviewController.updateReview
)

router.delete(
    '/delete/review',
    tokenMiddleware.verifyToken,
    reviewController.deleteUserReview
)

module.exports = router