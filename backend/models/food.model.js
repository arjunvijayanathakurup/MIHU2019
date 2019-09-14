const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    meal: {type: String, required: true},
    time: {type: String, required: true},
    place: {type: String, required: true},
    counter: {type: String, required: true},
},{
    timestamps: true,
});

const foodSchema = mongoose.model('Food', foodSchema);

module.exports = foodSchema;