var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var bcrypt = require('bcrypt');

var router = express.Router();

router.post('/api/register', function(req, res) {

  var name = req.body.name;
  var password = req.body.password;

  bcrypt.genSalt(12, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      var newUser = new User({
        name: name,
        password: hash,
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
    });
  });

});

module.exports = router;
