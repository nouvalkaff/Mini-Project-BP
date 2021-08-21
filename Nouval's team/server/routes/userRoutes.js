const express = require("express");

const router = express.Router();
const { signUp, signIn, getAllActivities, getAllProfiles, putMember, getMemberById, deleteMember } = require("../controllers/userControllers");
const { verifyToken, roleAdmin, roleUserAndAdmin, roleUser, loginVerify, getTokenSignUp, getTokenLogin } = require("../middleware/auth");

//=====================ADMIN============================
router.get("/admin/activities", roleAdmin, getAllActivities);
router.get("/admin/profiles", roleAdmin, getAllProfiles);

//==================USER AND ADMIN==========================
router.get("/profile/:id", roleUserAndAdmin, getMemberById);
router.put("/profile/update/:id", roleUserAndAdmin, putMember);
router.delete("/profile/delete/:id", roleUserAndAdmin, deleteMember);

router.post("/signUp", signUp, getTokenSignUp);
router.post("/login", signIn, getTokenLogin);
//=====================================================

module.exports = router;
