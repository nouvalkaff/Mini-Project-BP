const express = require("express");

const route = express.Router();

const { postActor, deleteAllActor } = require("../controllers/actorController");

//Post All Actor from a Movie
route.post("/", postActor)

//Delete All Actor
route.delete("/", deleteAllActor)


module.exports = route;