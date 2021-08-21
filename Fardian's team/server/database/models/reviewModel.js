const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    movie_id: {
      require: true,
      type: Schema.Types.ObjectId,
      ref: "Movies",
    },
    review_headline: {
      type: String,
      require: true,
    },
    review_detail: {
      type: String,
      require: true,
    },
    score: {
      type: Number,
      require: true,
    },
  },
  {
    // Enable timestamps, it will auto create createdAt and updatedAt column to know when data has been created and updated
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;
