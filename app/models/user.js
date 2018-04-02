var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: Add fields from https://github.com/bcitdatacomm/game/issues/49
// Last updated: 2018/04/02 adding logins

module.exports = mongoose.model('User', new Schema({
  name: String,
  password: String,
  logins: Number,
  admin: Boolean,
  shots_fired: Number,
  kills: Number,
  deaths: Number,
  games_played: Number,
  games_won: Number,
  time_played: Number
}));