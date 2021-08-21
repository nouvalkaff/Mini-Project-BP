const jwt = require("jsonwebtoken");
const UserModel = require("../../database/models/userModel");

const user = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .send("Forbidden, No Token provided. Please Login as user");
  }
  try {
    const decoded = jwt.verify(
      req.header("Authorization"),
      process.env.TOKEN_SECRET
    );
    const data = await UserModel.findOne({ _id: decoded.user.id });
    if (!data) {
      return res.status(500).json({
        message: "User ID not found!",
      });
    }

    if (data.role !== "user") {
      return res.status(403).json({
        message: "Forbidden, Please login as user",
      });
    }
    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const admin = async (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.header("Authorization"),
      process.env.TOKEN_SECRET
    );
    const data = await UserModel.findOne({ _id: decoded.user.id });
    console.log(decoded);
    console.log(data);
    if (data.role !== "admin") {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { user, admin };
