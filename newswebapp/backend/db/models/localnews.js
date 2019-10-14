const mongoose = require('../connection');
var Schema = mongoose.Schema;
var localSchema = new Schema({
    day: String,
    id: Number,
    heading: String,
    data: String,
    url: String
});
var localCollection = mongoose.model('localNews', localSchema);
module.exports = localCollection;