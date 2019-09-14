const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accomodationsSchema = new Schema({
    gender: {type: String, required: true},
    areaname: {type: String, required: true},
    locationOfAcc: {type: String, required: true},
    category: {type: String, required: true},
    contact: {type: String, required: true},
    isFull: {type: Boolean, required: true},

},{
    timestamps: true,
});

const Accomodation = mongoose.model('Accomodation', accomodationsSchema);

module.exports = Accomodation;