const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const informationSchema = new Schema({
    message: {type: String, required: true},
    time: {type: String, required:true},
    date :{ type: String, required: true}
},{
    timestamps: true,
});

const Information = mongoose.model('Information', informationSchema);

module.exports = Information;