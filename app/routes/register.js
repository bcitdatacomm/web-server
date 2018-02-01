var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var router = express.Router();

router.post('/api/register', function(req, res) {

  var name = req.body.name;
  var password = req.body.password;

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

});

module.exports = router;
