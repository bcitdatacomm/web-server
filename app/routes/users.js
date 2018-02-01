var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var router = express.Router();

router.get('/api/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

module.exports = router;
