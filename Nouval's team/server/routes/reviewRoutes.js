const express = require("express");

const router = express.Router();
const { createReview, updateReview, getMovieReview, showReviews, deleteReview, shareReview} = require("../controllers/reviewControllers");
const { roleAdmin, roleUserAndAdmin, roleUser } = require("../middleware/auth");

router.post("/post/review", roleUser, createReview);
router.put("/put/review/:id", roleUser, updateReview);
router.get("/allreviews", showReviews);
router.get("/get/review/:id", getMovieReview);
router.delete("/delete/reviews/:id", roleUser, deleteReview);
router.get("/get/reviewUser/:id", roleUser, shareReview);

module.exports = router;
