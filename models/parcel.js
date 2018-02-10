let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Parcel = new Schema({
    user_id: String,
    track_number: String,
    tag: String,
    carrier_id: String,
    track_log: [String],
});

module.exports = mongoose.model('Parcel', Parcel);