var express = require('express');
var router = express.Router();

var User = require('../models/user');

var router = express.Router();

router.post('/api/report_win', function(req, res) {

  var name = req.body.name;

  User.findOneAndUpdate({
    name: name
  }, {
    $inc: {
      games_won: +1,
    }
  }, {
    new: true
  }, function(err, response) {
    if (err) {
      res.json({
        error: err,
        success: false,
        message: 'Win report failed.'
      });
    } else {
      res.json({
        success: true,
        message: 'Statistics updated. Win report successful.'
      });
    }
  });

});

module.exports = router;