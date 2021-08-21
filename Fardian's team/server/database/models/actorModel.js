const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const actorSchema = new Schema({
	name: {
		type: String,
	},
	gender: {
		type: Number,
	},
	profile_path: {
		type: String
	},
	character_name: {
		type: String
	},
	movie: {
		type: Schema.Types.ObjectId, ref: 'Movies'
	},
	tmdb_movieId: {
		type: Number
	}
});

const ActorModel = mongoose.model("Actor", actorSchema);

module.exports =  { ActorModel, actorSchema };