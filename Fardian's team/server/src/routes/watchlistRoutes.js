const express = require("express");

const route = express.Router();

const {
  getAllWatchlists,
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
} = require("../controllers/watchlistController");

//Get All Watchlists
route.get("/", getAllWatchlists);

//Get single Watchlist by id
route.get("/:id", getWatchlist);

//Create Watchlist
route.post("/", createWatchlist);

//Update Watchlist
route.put("/:id", updateWatchlist);

//Delete Watchlist
route.delete("/:id", deleteWatchlist);

module.exports = route;
