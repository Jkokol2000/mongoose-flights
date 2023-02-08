module.exports = {
    new: newFlight,
    create,
    index,
    show
}

const Flights = require('../models/flights');
const Tickets = require('../models/tickets');

function newFlight(req, res) {
    const newFlight = new Flights();
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new',{departsDate, title: "New Flight"});
}

function create(req, res) {
    const flight = new Flights(req.body);
    flight.flightNo = Math.floor(Math.random() * (9999 - 10 + 1) + 10);
    flight.save(function(err) {
        res.redirect('/flights')
    });
}

function index(req, res) {
    Flights.find({}).sort('departs').exec(function(err, flights) {
       // let sortedFlights = flights.sort((a,b) => a-b )
        res.render('flights/index',{flights, title: "All Flights"});
    });
}

function show(req,res) {
    Flights.findById(req.params.id, function(err, flight){
        Tickets.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', { title: 'Flight Details', flight, tickets});
    })
})
}