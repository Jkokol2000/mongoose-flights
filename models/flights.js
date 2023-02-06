const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var c = new Date(year + 1, month, day);

const destinationSchema = new Schema ({
    airport: {type:String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'ATL']},
    arrival: {type:Date}
    })

const flightSchema = new Schema({
    airline: {type:String, enum: ['American','Southwest', 'United']},
    airport: {type:String, default:'DEN', enum: ['AUS', 'DFW', 'DEN', 'LAX', 'ATL']},
    flightNo: Number,
    departs: {type:Date, default: c},
    destinations: [destinationSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model("Flights", flightSchema);