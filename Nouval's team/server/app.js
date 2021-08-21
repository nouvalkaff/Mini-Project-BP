const express = require("express");
const fileUpload = require("express-fileupload");
const { sequelize } = require("./models");

require("dotenv").config();

const logger = require("morgan");
const cors = require("cors");

const app = express();

// To handle req.body (form-data)
app.use(fileUpload());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(logger("dev"));

app.use(express.static("public"));

app.use(
  cors({
    // origin: "https://movieapp-team-b-2021.herokuapp.com/",
    origin: "*",
  })
);

const userRoutes = require("./routes/userRoutes");
const roleRoutes = require("./routes/roleRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const movieRoutes = require("./routes/movieRoutes");
app.use("/api/rMovie", userRoutes, roleRoutes, reviewRoutes, movieRoutes);

app.get("/", (req, res) => {
  res.send({
    status_code: 200,
    status_message: "Success",
    message: "Welcome to MovReact API",
  });
});

app.all("*", (req, res) =>
  res.send("You've arrived in nowhere, please go to somewhere.")
);

app.listen(process.env.PORT || 4040, async () => {
  try {
    console.log(`SERVER IS RUNNING ON PORT 4040 or ${process.env.PORT}`);
    await sequelize.authenticate();
    console.log("Database Connected");
  } catch (error) {
    console.error("Message error: ", error);
  }
});
