var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var bcrypt = require('bcrypt');

var router = express.Router();

router.post('/api/register', function(req, res) {

  var name = req.body.name;
  var password = req.body.password;

  // make sure user doesn't already exist
  User.findOne({
    name: name
  }, function(err, user) {

    if (err) {
      throw err;
    }

    if (user) {
      res.json({
        success: false,
        message: 'Register failed. Someone already has this name.'
      });
    } else {

      bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          var newUser = new User({
            name: name,
            password: hash,
            admin: false,
            shots_fired: 0,
            kills: 0,
            deaths: 0,
            games_played: 0,
            games_won: 0,
            time_played: 0
          });

          newUser.save(function(err) {
            if (err) {
              throw err;
            }

            console.log('New user created successfully');
            res.json({
              success: true,
              message: 'New user created.'
            });

          });
        });
      });
    }
  });
});

module.exports = router;