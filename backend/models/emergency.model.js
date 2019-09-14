const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emergencySchema = new Schema({
    service: {type: String, required: true},
    name: {type: String, required: true},
    contact: {type: String, required: true},
},{
    timestamps: true,
});

const Emergency = mongoose.model('Emergency', emergencySchema);

module.exports = Emergency;