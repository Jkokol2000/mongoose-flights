const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: {type:String, default:'DEN'},
    flightNo: Number,
    departs: Date
}, {
    timestamps: true
});

module.exports = mongoose.model("Flights", flightSchema);