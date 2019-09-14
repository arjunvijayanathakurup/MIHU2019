const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vccSchema = new Schema({
    food: {type: String, required: true},
    time: {type: String, required: true},
    place: {type: String, required: true},
},{
    timestamps: true,
});

const Vcc = mongoose.model('Vcc', vccSchema);

module.exports = Vcc;