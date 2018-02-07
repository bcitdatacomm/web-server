var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var router = express.Router();

// header.payload.signature
router.post('/api/login', function(req, res) {

  var name = req.body.name;
  var password = req.body.password;

  // TODO: Decide when a token should expire
  var expiry = 60; // one hour

  // find the user
  User.findOne({
    name: name
  }, function(err, user) {

    if (err) {
      throw err;
    }

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        const payload = {
          admin: user.admin
        };

        var token = jwt.sign(payload, process.env.SECRET, {
          expiresIn: expiry
        });

        res.json({
          success: true,
          message: 'Token created.',
          duration: expiry,
          token: token
        });
      }
    }
  });
});

module.exports = router;
