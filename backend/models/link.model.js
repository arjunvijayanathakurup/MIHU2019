const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const liveSchema = new Schema({
    live: {type: String, required: true},
},{
    timestamps: true,
});

const Live = mongoose.model('Live', liveSchema);

module.exports = Live;