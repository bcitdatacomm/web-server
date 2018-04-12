var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var morganBody = require('morgan-body');
var mongoose = require('mongoose');
var pug = require('pug');

var bcrypt = require('bcryptjs');
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

app.set('view engine', 'pug'); // used to be jade

app.use(morgan('dev')); // logging

morganBody(app);

app.get('/', function(req, res) {
  res.render('../app/views/home', {
    title: 'Highnoon'
  });
});

app.get('/register', function(req, res) {
  res.render('../app/views/register', {
    title: 'Register'
  });
});

app.get('/login', function(req, res) {
  res.render('../app/views/login', {
    title: 'Login'
  });
});

// routing
// public routes need to be above auth.js
app.use(require('./app/routes/connect'));
app.use(require('./app/routes/register'));
app.use(require('./app/routes/login'));
app.use(require('./app/routes/auth'));
app.use(require('./app/routes/users'));
app.use(require('./app/routes/report_match'));
app.use(require('./app/routes/report_win'));
app.use(require('./app/routes/user'));
app.use(require('./app/routes/gameserver'));

// start server

app.listen(port);
console.log('Server started: http://localhost:' + port);