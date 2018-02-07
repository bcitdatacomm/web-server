var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var User = require('../models/user');

var router = express.Router();

router.use(function(req, res, next) {

  // check for token anywhere
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        // token didn't pass auth
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // auth success
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // token not passed at all
    return res.status(403).send({
      success: false,
      message: 'No token provided. Please see /api/login'
    });

  }
});

router.get('/api', function(req, res) {
  res.json({
    success: true,
    message: 'its high noon'
  });
});

module.exports = router;