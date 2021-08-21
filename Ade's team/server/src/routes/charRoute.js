const express = require('express')

const router = express.Router()

const char = require('../controllers/charController')

// Route Character
router.get('/chr', char.getChar)


module.exports = router