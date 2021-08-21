//AUTHENTICATION
const jwt = require("jsonwebtoken"); //import jwt
const { User } = require("../models"); // Import user model
routes = {};

routes.getTokenSignUp = async (req, res) => {
  try {
    //req email from body
    const { email } = req.body;
    const user = await User.findOne({ where: { email: email } });

    const token = jwt.sign(
      {
        userId: user.dataValues.id,
        fullName: user.dataValues.fullName,
        userName: user.dataValues.userName,
        roleId: user.dataValues.roleId,
      },
      process.env.SECRET_KEY
    );

    //if sign up success
    const userResult = {
      statusCode: 200,
      statusText: "Success",
      message: "Sign up Success!",
      data: {
        token: token,
        data: user.dataValues,
      },
    };
    res.json(userResult);
    //if sign up error
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: err,
    });
  }
};

routes.getTokenLogin = async (req, res) => {
  try {
    //req email from body
    const { email } = req.body;
    const user = await User.findOne({ where: { email: email } });

    const token = jwt.sign(
      {
        userId: user.dataValues.id,
        fullName: user.dataValues.fullName,
        userName: user.dataValues.userName,
        roleId: user.dataValues.roleId,
      },
      process.env.SECRET_KEY
    );

    //if sign up success
    const userResult = {
      statusCode: 200,
      statusText: "Success",
      message: "Login Success!",
      data: {
        token: token,
        data: user.dataValues,
      },
    };

    res.json(userResult);
    //if sign up error
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: err,
    });
  }
};

//role user
routes.roleUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    //roleId 1 => "user"
    //roleId 2 => "admin"
    if (decoded.roleId !== 1) {
      return res.status(403).json({
        statusText: "Forbidden",
        message: "Sorry, you do not have access, user only!",
      });
    }

    req.roleId = decoded.roleId;

    next();
  } catch (err) {
    // If error it will make status code 500 (Internal Server Error) and send the error message
    res.status(500).json({
      statusText: "Internal Server Error",
      message: err,
    });
  }
};

routes.roleAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    //roleId 1 => "user"
    //roleId 2 => "admin"
    if (decoded.roleId !== 2) {
      return res.status(403).json({
        statusText: "Forbidden",
        message: "Sorry, you do not have access, admin only!",
      });
    }

    req.roleId = decoded.roleId;
    //next to get all activity
    next();
  } catch (err) {
    // If error it will make status code 500 (Internal Server Error) and send the error message
    res.status(500).json({
      statusText: "Internal Server Error",
      message: err,
    });
  }
};

routes.loginVerify = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    //roleId 1 => "user"
    //roleId 2 => "admin"
    if (decoded.roleId === 1 || decoded.roleId === 2) {
      const userResult = {
        statusCode: 200,
        statusText: "Success",
        message: "Login Success!",
      };
      res.json(userResult);
      // return res.status(403).json({
      //   message: "Forbidden",
      // });
    }
  } catch (err) {
    // If error it will make status code 500 (Internal Server Error) and send the error message
    res.status(500).json({
      statusText: "Internal Server Error",
      message: err,
    });
  }
};

routes.roleUserAndAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    //roleId 1 => "user"
    //roleId 2 => "admin"
    if (decoded.roleId === 1 || decoded.roleId === 2) {
      req.roleId = decoded.roleId;
    }
    next();
  } catch (err) {
    // If error it will make status code 500 (Internal Server Error) and send the error message
    res.status(500).json({
      statusText: "Internal Server Error",
      message: err,
    });
  }
};

module.exports = routes;
