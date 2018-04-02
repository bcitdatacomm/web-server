var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var bcrypt = require('bcryptjs');

var router = express.Router();

// header.payload.signature
router.post('/api/login', function(req, res) {

  var name = req.body.name;
  var password = req.body.password;

  // TODO: Decide when a token should expire
  var expiry = 60; // one hour

  // find the user
  User.findOneAndUpdate({
    name: name
  }, {
    $inc: {
      logins: +1
    }
  }, function(err, user) {

    if (err) {
      throw err;
    }

    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else if (user) {

      bcrypt.compare(req.body.password, user.password, function(err, success) {
        if (success) {
          const payload = {
            admin: user.admin
          };

          var token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: expiry
          });

          res.json({
            success: true,
            message: 'Token created.',
            name: user.name,
            duration: expiry,
            token: token
          });
        } else {
          res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          });
        }
      });

    }
  })
});

module.exports = router;