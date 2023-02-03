module.exports = {
    new: newFlight
}

const flights = require('../models/flights');

function newFlight(req, res) {
    res.render('flights/new');
}