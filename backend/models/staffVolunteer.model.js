const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffVolunteerSchema = new Schema({
    name: {type: String, required: true},
    department: {type: String, required: true},
    seva: {type: String},
},{
    timestamps: true,
});

const StaffVolunteer = mongoose.model('StaffVolunteer', staffVolunteerSchema);

module.exports = StaffVolunteer;