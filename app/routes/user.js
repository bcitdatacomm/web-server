var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var router = express.Router();

router.get('/api/user', function(req, res) {
  User.findOne({
    name: req.query.name
  }, function(err, doc) {
    res.json(doc);
  });
});

module.exports = router;