const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
  user_id: {
    type: String,
  },
  movie_id: {
    type: String,
  },
});

const WatchlistModel = mongoose.model("Watchlist", watchlistSchema);

module.exports = { WatchlistModel, watchlistSchema };
