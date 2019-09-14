const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logEngineSchema = new Schema({
    userId: {type: String, required: true},
    username: {type: String, required: true},
    name: {type: String, required: true},
    action: {type: String, required: true},
    detailedData: {type: String, required: true},
    actionVal: {type: Boolean, required: true},
},{
    timestamps: true,
});

const LogEngine = mongoose.model('LogEngine', logEngineSchema);

module.exports = LogEngine;