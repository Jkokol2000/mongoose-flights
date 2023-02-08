const Flights = require('../models/flights');
const Tickets = require('../models/tickets');

module.exports = {
    create,
    new: newTicket,
}


function create(req, res) {
    const ticket = new Tickets({
      seat: req.body.seat,
      price: req.body.price,
      flight: req.params.id
    });
    ticket.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.redirect(`/flights/${req.params.id}`, {ticket});
    });
  };

  function newTicket(req, res) {
        res.render('tickets/new', { flight: req.params.id, title:"New Ticket",flightId: req.params.id });
}