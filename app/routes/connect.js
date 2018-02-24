var express = require('express');
var router = express.Router();

var router = express.Router();

router.get('/api/connect', function(req, res) {
  res.json({
    success: true,
    message: 'A connection seems to have been made.'
  });
});

module.exports = router;