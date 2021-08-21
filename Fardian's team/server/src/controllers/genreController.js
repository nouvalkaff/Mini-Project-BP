//require model
const mongoose = require("mongoose");
const { GenreModel } = require("../../database/models/genreModel");

//Get all Genres
const getAllGenres = async (req, res) => {
  try {
    const data = await GenreModel.find();

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

//Get a Genre by ID
const getGenre = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await GenreModel.findById(_id);

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

//Create Genre
const createGenre = async (req, res) => {
  const newGenre = await GenreModel(req.body);
  try {
    await newGenre.save();
    res.status(201).json(newGenre);
  } catch (error) {
    console.log(error);
    res.status(409).json(error);
  }
};

//Update Genre
const updateGenre = async (req, res) => {
  const { id: _id } = req.params;
  const newData = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await GenreModel.findById(_id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      const updatedGenre = await GenreModel.findByIdAndUpdate(_id, newData, {
        new: true,
      });
      return res.send({
        statusCode: 200,
        statusText: "success",
        data: updatedGenre,
      });
    }
  }
};

//Delete Genre by ID
const deleteGenre = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await GenreModel.findById(id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      await GenreModel.findByIdAndRemove(id);
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Genre deleted succesfully",
      });
    }
  }
};

module.exports = {
  getAllGenres,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre,
};
