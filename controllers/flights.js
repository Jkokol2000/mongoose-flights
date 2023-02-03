module.exports = {
    new: newFlight,
    create,
    index
}

const Flights = require('../models/flights');

function newFlight(req, res) {
    const newFlight = new Flights();
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}

function create(req, res) {
    const flight = new Flights(req.body);
    flight.flightNo = Math.floor(Math.random() * (9999 - 10 + 1) + 10);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights')
    });
}

function index(req, res) {
    Flights.find({}, function(err, flights) {
        res.render('flights/index', { flights});
    });
}