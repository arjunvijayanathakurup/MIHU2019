const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    token: {type: String, required: true},
    date: {type: String, required: true},
    darshanTime: {type: String, required: true},
    tokenLocation: {type: String, required: true},
    tokenTime: {type: String, required: true},
},{
    timestamps: true,
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;