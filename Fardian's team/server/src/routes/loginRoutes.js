const express = require("express");

const route = express.Router();

const { loginUser } = require("../controllers/loginController");

//Login a User
route.post("/", loginUser);

module.exports = route;
