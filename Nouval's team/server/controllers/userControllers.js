const { User, Role, Review } = require("../models");
const bcrypt = require("bcrypt");
const routes = {};
const jwt = require("jsonwebtoken");

//===============================GET ALL MEMBERS PROFILE====================================
//for get all Members
routes.getAllProfiles = async (req, res) => {
  try {
    const allUser = await User.findAll();
    res.send({
      statusCode: 200,
      statusText: "Success",
      message: "Success to get all profiles data, happy consume... :D",
      data: allUser,
    });
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: "Sorry, we failed to get all profiles data",
      Error: err,
    });
  }
};

//===============================GET PROFILE BY/:ID====================================
//get members by/:id
routes.getMemberById = async (req, res) => {
  try {
    const byId = req.params.id;
    const users = await User.findOne({ where: { id: byId } });
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json(`This member with ID: ${byId} not found`);
    }
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: `Sorry, we failed to find your requested ID`,
      Error: err,
    });
  }
};
//===============================GET ALL DETAILS ABOUT MEMBERS====================================
//to get all details
routes.getAllActivities = async (req, res) => {
  try {
    const allUser = await User.findAll({ include: [Review, Role] });
    res.send({
      statusCode: 200,
      statusText: "success",
      message: " Success to get all activities data, happy consume... :D",
      data: allUser,
    });
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: `Sorry, we failed to get all activities data`,
      Error: err,
    });
  }
};

//===============================UPDATE/EDIT MEMBER BY/:ID====================================
//update or edit members
routes.putMember = async (req, res) => {
  try {
    const reqBoPass = req.body.password;
    const idParPut = req.params.id;
    const find = await User.findOne({ where: { id: idParPut } });

    if (!req.files) {
      return res
        .status(400)
        .json({ message: "Please input your profile picture" });
    }

    const profilePicture = req.files.profilePicture;
    const uploadPath =
      __dirname + "/../public/images/profilePictures/" + profilePicture.name;

    const user = await User.update(
      {
        ...req.body,
        password: bcrypt.hashSync(reqBoPass, 10),
        profilePicture: `${profilePicture.name}`,
      },
      {
        where: {
          id: idParPut,
        },
      }
    );

    profilePicture.mv(uploadPath, (err) => {
      if (err) res.status(500).json({ message: err.message });
    });

    if (find) {
      res.send({
        statusCode: 200,
        statusText: "Updated",
        message: `User with ID: ${idParPut} has been updated!`,
      });
    } else {
      res.status(404).json(`This member with ID: ${idParPut} not found`);
    }
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: `Sorry, we failed to update this profile data`,
      err,
    });
  }
};

//===============================DELETE MEMBER BY/:ID====================================
//delete members by/:id
routes.deleteMember = async (req, res) => {
  const idParDel = req.params.id;
  const findId = await User.findOne({ where: { id: idParDel } });
  try {
    const user = await User.destroy({
      where: {
        id: idParDel,
      },
    });
    if (findId) {
      res.send({
        statusCode: 200,
        statusText: "Deleted",
        message: `User with ID: ${idParDel} has been deleted!`,
      });
    } else {
      res.status(404).json(`This member with ID: ${idParDel} not found`);
    }
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: `Sorry, we failed to delete this profile data`,
      Error: err,
    });
  }
};

//===============================REGISTER====================================
//register member and add to database
routes.signUp = async (req, res, next) => {
  const reqBoPass = req.body.password;
  const userName = req.body.userName;
  try {
    const findUsername = await User.findOne({ where: { userName: userName } });
    if (findUsername) {
      res.status(500).json({
        statusText: "Internal Server Error",
        messsage: "UserName exist",
      });
    } else {
      const encryptUserPass = await User.create({
        ...req.body,
        password: bcrypt.hashSync(reqBoPass, 10),
      });
      req.user = encryptUserPass;
    }
    next();
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      messsage: err,
    });
  }
};

//========!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// exports.create = async (req, res, next) => {
//   try {
//     if (!req.files) {
//       return res.status(400).json({ message: "File is required" });
//     }

//     // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//     const profilePicture = req.files.profilePicture;
//     const uploadPath = __dirname + "/../public/images/" + profilePicture.name;

//     // Use the mv() method to place the file somewhere on your server
//     profilePicture.mv(uploadPath, async function (err) {
//       if (err) return res.status(500).send({ message: err.message });

//       const createdUser = await user.create({
//         name: req.body.name,
//         profilePicture: `${profilePicture.name}`,
//       });

//       return res.status(201).send({ data: createdUser });
//     });
//   } catch (error) {
//     return res.status(500).send({ message: error.message });
//   }
// };

//===============================LOGIN===================================
//user login should be need fill, username, email and password
routes.signIn = async (req, res, next) => {
  try {
    //getting email from body and compare with email on database
    const { email } = req.body;
    const user = await User.findOne({ where: { email: email } });

    //if email doesn't exist
    if (!user) {
      return res.status(404).json({
        statusText: "Not Found",
        message: "Email not found",
      });
    }

    // verify the password
    const verifyPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // If password doesn't match
    if (!verifyPassword) {
      return res.status(401).json({
        statusText: "Unauthorized",
        message: "Wrong password",
      });
    }
    //proceed to login Verify
    next();

    //if login Error
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: err.message,
    });
  }
};

module.exports = routes;
