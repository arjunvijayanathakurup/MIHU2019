const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {type: String, required: true},
    batch: {type: String, required: true},
    campus: {type: String, required: true},
    contact: {type: String, required: true},
    seva: {type: String},
    cordName: {type: String},
    cordContact: {type: String},
},{
    timestamps: true,
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;