//require model
const mongoose = require("mongoose");
const UserModel = require("../../database/models/userModel");
const { promisify } = require("util");
const fs = require("fs");

// const deleteFile = promisify(fs.unlink);

//Get all Users
const getAllUsers = async (req, res) => {
  try {
    data = await UserModel.find();

    res.json({
      statusCode: 200,
      statusText: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: error,
    });
  }
};

//Get a User by ID
const getUser = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await UserModel.findById(_id);

    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      res.send({
        statusCode: 200,
        statusText: "success",
        data,
      });
    }
  }
};

//Create User
const createUser = async (req, res) => {
  const newUser = new UserModel(req.body);

  try {
    // if (!req.files) {
    //   return res.status(400).json({ message: "Profile  picture is required" });
    // }

    // // the name of the input field (i.e "sampleFile") is used to retrieve the uploaded file
    // const profilePicture = req.files.profile_pic;
    // const uploadPath = __dirname + "/../public/images/" + profilePicture.name;
    // console.log(profilePicture);
    // // Use the mv() method to place the file somewhere on your server
    // profilePicture.mv(uploadPath, async function (err) {
    //   if (err) return res.status(500).send({ message: err.message });

    const createdUser = await UserModel.create({
      ...req.body,
      // profile_pic: `${profilePicture.name}`,
    });

    const newUser = await UserModel.findOne({ email: req.body.email });
    return res.status(201).json({
      statusCode: 200,
      message: "Registration successfully",
      statusText: "OK",
      data: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        userName: newUser.userName,
        profile_pic: newUser.profile_pic,
      },
    });
    // });
  } catch (error) {
    console.log(error);
    res.status(409).json({
      statusCode: 409,
      message: "Registration Failed.",
      statusText: "error",
    });
  }
};

//Update User
const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const newData = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await UserModel.findById(_id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      // if (!req.files) {
      //   return res.status(400).json({ message: "File is required" });
      // }

      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      // const profilePicture = req.files.profile_pic;
      // const uploadPath = __dirname + "/../public/images/" + profilePicture.name;

      // const moveImage = promisify(profilePicture.mv);

      // await moveImage(uploadPath);

      // const oldData = await UserModel.findOne({ _id: req.params.id });

      // Delete old file
      // await deleteFile(__dirname + "/../public/" + oldData.profile_pic);

      try {
        const updatedUser = await UserModel.findOneAndUpdate(
          { _id: req.params.id },
          {
            ...req.body,
            // profile_pic: `${profilePicture.name}`,
          }
        );
        // find new data
        const data = await UserModel.findOne({ _id: req.params.id });

        return res.send({
          statusCode: 200,
          statusText: "success",
          data: data,
        });
      } catch (error) {
        res.status(409).json({
          statusCode: 409,
          message: "Update Failed.",
          statusText: "error",
        });
      }
    }
  }
};

//Delete User by ID
const deleteUser = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.send({
      statusCode: 500,
      statusText: "fail",
      statusMessage: "Format Id invalid",
    });
  } else {
    const data = await UserModel.findById(id);
    if (!data) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Id not found",
      });
    } else {
      // const oldData = await UserModel.findOne({ _id: req.params.id });
      // await deleteFile(__dirname + "/../public/" + oldData.profile_pic);
      await UserModel.findByIdAndRemove(id);

      return res.send({
        statusCode: 200,
        statusText: "Success",
        statusMessage: "User deleted successfully!",
      });
    }
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
