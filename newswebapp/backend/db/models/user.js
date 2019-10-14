const mongoose = require('../connection');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    day: { type: String, required: true, unique: true },
    worldNews: [],
    opinion: [],
    cricket: [],
    entertainmentsNews: []
});


var userCollection = mongoose.model('newsReport', UserSchema);

module.exports = userCollection;
