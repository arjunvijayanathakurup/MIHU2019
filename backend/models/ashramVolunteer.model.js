const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ashramSchema = new Schema({
    section: {type: String, required: true},
    sevaPlace: {type: String, required: true},
    incharge: {type: String},
    contact: {type: String, required: true},
},{
    timestamps: true,
});

const Ashram = mongoose.model('Ashram', ashramSchema);

module.exports = Ashram;