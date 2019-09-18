const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportationSchema = new Schema({
    mode: {type: String, required: true},
    busno: {type: String},
    contact: {type: String, required: true},
    froms: {type: String, required: true},
    destination: {type: String, required: true},
    deptime: {type: String},
    parking: {type: String},
},{
    timestamps: true,
});

const Transportation = mongoose.model('Transportation', transportationSchema);

module.exports = Transportation;