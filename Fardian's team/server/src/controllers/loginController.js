const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../database/models/userModel");

//Login Employee
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await UserModel.findOne({ email: email }).exec();

    if (user) {
      const { _id, email, userName, fullName, role } = user;

      const verify = await bcrypt.compare(req.body.password, user.password);

      if (verify === true) {
        jwt.sign(
          {
            user: {
              id: _id,
              name: fullName,
              email: email,
              username: userName,
              role: role,
            },
          },
          process.env.TOKEN_SECRET,
          { expiresIn: "30d" },
          (error, token) => {
            if (error) throw error;

            res.header("Authorization", token).json({
              statusCode: 200,
              message: "Login successfully",
              statusText: "OK",
              data: {
                id: _id,
                name: fullName,
                email: email,
                userName: userName,
                role: role,
                token: token,
              },
            });
          }
        );
      } else {
        res.send({
          statusCode: 204,
          message: "Wrong password!",
          statusText: "OK",
        });
      }
    } else {
      res.send({
        statusCode: 204,
        message: "Email has not registered, please create user account first",
        statusText: "OK",
      });
    }
  } else {
    res.send("Please enter Username and Password");
  }
};

module.exports = {
  loginUser,
};
