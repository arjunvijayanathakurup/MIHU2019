const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffDetailSchema = new Schema({
    name: {type: String, required: true},
    seva: {type: String},
    department: {type: String, required: true},
    contact: {type: String, required: true},
},{
    timestamps: true,
});

const StaffDetail = mongoose.model('StaffDetail', staffDetailSchema);

module.exports = StaffDetail;