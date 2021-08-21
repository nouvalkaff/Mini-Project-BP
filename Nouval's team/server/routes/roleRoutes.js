const express = require("express");

const router = express.Router();
const { postRole } = require("../controllers/roleControllers");
const { roleAdmin } = require("../middleware/auth");

//=============================ADMIN ONLY====================================
router.post("/admin/post/role", roleAdmin, postRole);

module.exports = router;
