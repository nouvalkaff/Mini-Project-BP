const express = require("express");

const route = express.Router();

const { user, admin } = require("../middleware/authentication");
const {
  getAllReviews,
  getReview,
  createReview,
	createReveiwByMovieId,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

//Get All Reviews
route.get("/", getAllReviews);

//Get a Review by id
route.get("/:id", user, getReview);

//Create a Review
route.post("/", user, createReview);

//Create Review by Movie Id
route.post("/:id", user, createReveiwByMovieId);

//Update a Review
route.put("/:id", user, updateReview);

//Delete a Review
route.delete("/:id", user, deleteReview);

module.exports = route;
