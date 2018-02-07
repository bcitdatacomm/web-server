var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

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
      res.json({ success: false, message: 'Register failed. Someone already has this name.' });
    } else {
      var newUser = new User({
        name: name,
        password: password,
        admin: false
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
    }

  });

});

module.exports = router;
