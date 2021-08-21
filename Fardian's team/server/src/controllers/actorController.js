//Require package
const mongoose = require("mongoose");
const axios = require("axios");

//Require Model
const { ActorModel } = require("../../database/models/actorModel");
const { MoviesModel } = require("../../database/models/moviesModel")


//Input movies to database
const postActor = async (req,res) => {
	try {
		const ref_tmdb_movieId = req.body.tmdb_movieId
		const options = {
			method: 'get',
			url: `https://api.themoviedb.org/3/movie/${ref_tmdb_movieId}/credits`,
			params: {
				api_key: process.env.API_KEY,
			}
		}

		const actorDetails = await axios(options);
		console.log(actorDetails.data.cast)
		const actorInfo = actorDetails.data.cast

		for (i=0; i<actorInfo.length; i++) {
			const refMovie = await ActorModel.findOne({title: actorInfo[i].name, tmdb_movieId: ref_tmdb_movieId})
			if (!refMovie) {
				const newActorDetails = new ActorModel({
					name: actorInfo[i].name,
					gender: actorInfo[i].gender,
					profile_path: actorInfo[i].profile_path,
					character_name: actorInfo[i].character,
					movie: await MoviesModel.findOne({ref_tmdb_movieId}),
					tmdb_movieId: ref_tmdb_movieId
				});
				await newActorDetails.save();

			} else {
				return res.send({
					statusCode: 500,
					statusText: "Failed",
					statusMessage: "Actor is already exist in the movie."
				})
			}				
		}

		const allActorInfo = await ActorModel.find({tmdb_movieId: ref_tmdb_movieId});
		


		res.send({
			statusCode: 200,
			statusText: 'Success',
			data: allActorInfo
		})
	} catch (error) {
		console.log(error);
		res.send({
			statusCode: 500,
			statusTest: 'Failed',
			statusMessage: error,
		})
	}
};

const deleteAllActor = async (req,res) => {
	try {
		const actorDetails = await ActorModel.deleteMany();
		console.log(actorDetails)

		res.send({
			statusCode: 200,
			statusText: "Success",
			delete_data_count: actorDetails.deletedCount
		});
	} catch (error) {
		console.log(error);
		res.send({
			statusCode: 500,
			statusText: "Failed",
			statusMessage: error
		});
	}
}

module.exports = { postActor, deleteAllActor }