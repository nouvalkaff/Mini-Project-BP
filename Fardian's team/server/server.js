//Require dotenv
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
//Import Router
const watchlistRoutes = require("./src/routes/watchlistRoutes");
const reviewRoutes = require("./src/routes/reviewRoutes");
const userRoutes = require("./src/routes/userRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
const movieRoute = require("./src/routes/movieRoute");
const actorRoute = require("./src/routes/actorRoute");
const genreRoutes = require("./src/routes/genreRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

//To read req.body
app.use(express.json()); //Enable req.body JSON type
app.use(express.urlencoded({ extended: false })); //Support urlencode body
app.use(fileUpload());
app.use(cors());
app.use(express.static("src/public"));

//Routing API
app.use("/api/v1/watchlist", watchlistRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", loginRoutes);
app.use("/api/v1/movie", movieRoute);
app.use("/api/v1/actor", actorRoute);
app.use("/api/v1/genre", genreRoutes);

//Routing Homepage
app.get("/", (req, res) => res.send("Welcome to Movies API"));

//404 Not found
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

//Require DB Connection
const dbConnection = require("./database/config/index")();

//Run Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
