const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moreDetailsSchema = new Schema({
	budget: {
		type: Number
	},
	production_companies: {
		type: Array
	},
	revenue: {
		type: Number
	},
	runtime: {
		type: Number
	},
	tagline: {
		type: String
	},
	spoken_languages: {
		type: Array
	},
	trailer_instance: {
		type: String
	},
	trailers: {
		type: Array
	},
	tmdb_movieId: {
		type: Number
	}
});

const MoreDetailsModel = mongoose.model("More_Details", moreDetailsSchema);

module.exports = { MoreDetailsModel, moreDetailsSchema}