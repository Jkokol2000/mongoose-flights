var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

// All Routes start with "/flights"

// GET /flights/new
router.get('/new', flightsCtrl.new);

module.exports = router;
