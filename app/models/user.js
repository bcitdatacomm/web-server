var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: Add fields from https://github.com/bcitdatacomm/game/issues/49
module.exports = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));
