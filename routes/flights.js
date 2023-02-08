var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')
// All Routes start with "/flights"

// GET /flights/new
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);
router.get('/:id', flightsCtrl.show);
module.exports = router;
