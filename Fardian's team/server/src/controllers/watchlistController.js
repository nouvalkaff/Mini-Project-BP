//require model
const mongoose = require("mongoose");
const UserModel = require("../../database/models/userModel");
const { WatchlistModel } = require("../../database/models/watchlistModel");

//Get all Watchlists
const getAllWatchlists = async (req, res) => {
  try {
    const data = await WatchlistModel.find();

    res.send({
      statusCode: 200,
      statusText: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: error,
    });
  }
};

//Get a Watchlist by ID
const getWatchlist = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await WatchlistModel.findById(_id);

    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      res.send({
        statusCode: 200,
        statusText: "success",
        data,
      });
    }
  }
};

//Create Watchlist
const createWatchlist = async (req, res) => {
  // const newWatchlist = new WatchlistModel(req.body);
  // const user = await UserModel.findById({ _id: req.body.user_id });

  try {
    const newWatchList = await UserModel.findOneAndUpdate(
      { _id: req.body.id },
      {
        $push: {
          watchList: {
            movie_id: req.body.movie_id,
          },
        },
      },
      { new: true }
    );
    // await user.user_Watchlist.push(newWatchlist);
    // await user.save();
    res.status(201).json(newWatchList);
  } catch (error) {
    console.log(error);
    res.status(409).json(error);
  }
};

//Update Watchlist
const updateWatchlist = async (req, res) => {
  const { id: _id } = req.params;
  const newData = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await WatchlistModel.findById(_id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      const updatedWatchlist = await WatchlistModel.findByIdAndUpdate(
        _id,
        newData,
        {
          new: true,
        }
      );
      return res.send({
        statusCode: 200,
        statusText: "success",
        data: updatedWatchlist,
      });
    }
  }
};

//Delete Watchlist by ID
const deleteWatchlist = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await WatchlistModel.findById(id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      await WatchlistModel.findByIdAndRemove(id);
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Watchlist deleted succesfully",
      });
    }
  }
};

module.exports = {
  getAllWatchlists,
  getWatchlist,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist,
};
