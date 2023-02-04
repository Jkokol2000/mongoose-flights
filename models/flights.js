const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var c = new Date(year + 1, month, day);

const flightSchema = new Schema({
    airline: {type:String, enum: ['American','Southwest', 'United']},
    airport: {type:String, default:'DEN', enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: Number,
    departs: {type:Date, default: c}
}, {
    timestamps: true
});

module.exports = mongoose.model("Flights", flightSchema);