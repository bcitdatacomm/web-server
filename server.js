var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var bcrypt = require('bcrypt');
var dotenv = require('dotenv').load();

var jwt = require('jsonwebtoken');
var config = require('./config');

var User = require('./app/models/user');

var port = process.env.PORT || 8888;

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(morgan('dev')); // logging

app.get('/', function(req, res) {
  res.send('LRS Server');
});

// routing
// public routes need to be above auth.js
app.use(require('./app/routes/register'));
app.use(require('./app/routes/login'));
app.use(require('./app/routes/auth'));
app.use(require('./app/routes/users'));
app.use(require('./app/routes/report_match'));

// start server

app.listen(port);
console.log('Server started: http://localhost:' + port);