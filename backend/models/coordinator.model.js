const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coordinatorSchema = new Schema({
    name: {type: String, required: true},
    seva: {type: String, required: true},
    department: {type: String, required: true},
    contact: {type: String, required: true},
},{
    timestamps: true,
});

const Coordinator = mongoose.model('Coordinator', coordinatorSchema);

module.exports = Coordinator;