const express = require("express");
const { user, admin } = require("../middleware/authentication");
const route = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

//Get All Users
route.get("/", user, getAllUsers);

//Get a User by id
route.get("/:id", user, getUser);

//Create a User
route.post("/register", createUser);

//Update a User
route.put("/:id", user, updateUser);

//Delete a User
route.delete("/:id", user, deleteUser);

module.exports = route;
