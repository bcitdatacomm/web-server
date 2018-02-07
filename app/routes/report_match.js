var express = require('express');
var router = express.Router();

var User = require('../models/user');

var router = express.Router();

router.post('/api/report_match', function(req, res) {

  var name = req.body.name;
  var shots_fired = req.body.shots_fired;
  var kills = req.body.kills;
  var deaths = req.body.deaths;
  var if_game_won = req.body.if_game_won;
  var time_played = req.body.time_played;

  User.findOneAndUpdate({
    name: name
  }, {
    $inc: {
      shots_fired: +shots_fired,
      kills: +kills,
      deaths: +deaths,
      games_played: +1,
      games_won: +if_game_won,
      time_played: +time_played
    }
  }, {
    new: true
  }, function(err, response) {
    if (err) {
      res.json({
        error: err,
        success: false,
        message: 'Match report failed.'
      });
    } else {
      res.json({
        success: true,
        message: 'Statistics updated. Match report successful.'
      });
    }
  });

});

module.exports = router;