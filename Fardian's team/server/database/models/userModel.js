const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { watchlistSchema } = require("./watchlistModel");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      set: encryptPassword,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    profile_pic: {
      type: String,
      get: getProfilePicture,
    },
    watchList: [watchlistSchema],
  },
  {
    // Enable timestamps, it will auto create createdAt and updatedAt column to know when data has been created and updated
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: { getters: true },
  }
);

const UserModel = mongoose.model("User", userSchema);

//This will be running when user create or change password
function encryptPassword(password) {
  const encryptPassword = bcrypt.hashSync(password, 10);
  return encryptPassword;
}

// for creating profil picture
function getProfilePicture(picture) {
  return `/images/${picture}`;
}
module.exports = UserModel;
