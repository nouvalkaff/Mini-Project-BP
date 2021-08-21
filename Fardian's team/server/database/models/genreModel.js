const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
  tmdb_genreId: {
    type: Number,
  },
  name: {
    type: String,
  },
});

const GenreModel = mongoose.model("Genre", genreSchema);

module.exports = { GenreModel, genreSchema };
