const Flights = require('../models/flights');
const Tickets = require('../models/tickets');

module.exports = {
    create,
    new: newTicket,
    delete: deleteTicket,
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
      res.redirect(`/flights/${req.params.id}`);
    });
  };

  function newTicket(req, res) {
        res.render('tickets/new', { flight: req.params.id, title:"New Ticket",flightId: req.params.id });
}

function deleteTicket(req, res) {
    Tickets.findById(req.params.id, function(err, ticket) {
        Tickets.findByIdAndDelete(req.params.id, function(err) {
            if(err) console.log(err);
            res.redirect(`/flights/${ticket.flight._id}`);
          })
        });
      };