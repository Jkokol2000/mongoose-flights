const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {type:String, enum: ['American','Southwest', 'United']},
    airport: {type:String, default:'DEN', enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: Number,
    departs: {type:Date, default: () => Date.now() + 7*24*60*60*1000}
}, {
    timestamps: true
});

module.exports = mongoose.model("Flights", flightSchema);